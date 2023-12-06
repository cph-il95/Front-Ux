import { Button, Grid, PasswordInput, Stack, TextInput } from "@mantine/core";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../components/backgroundImage.module.css";
import { useRouter } from "next/router";

export default function index() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const supabase = createClient(
    "https://mviilvaebgkbuyuwkrgd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12aWlsdmFlYmdrYnV5dXdrcmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzY0MTMsImV4cCI6MjAxNTcxMjQxM30.dD4TGrVJHss_rKckmilVjQC2n2kOv2V2GFUPO0VOwyY"
  );

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser();
    fetchUserData();
    console.log("user is logged in with email:", email);
    setError("");
  };

  async function loginUser() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setError("ops! your e-mail or password is incorrect");
    } else {
      localStorage.setItem("email", JSON.stringify(email));
      router.push("/booking/start");
    }
  }

  async function fetchUserData() {
    const loggedInEmail = JSON.parse(localStorage.getItem("email"));
    const { data, error } = await supabase
      .from("users")
      .select(firstname, surname, email)
      .eq("email".loggedInEmail);
    if (data && data.lengt > 0) {
      if (loggedInEmail == data[0].email) {
        localStorage.setItem("firsname", JSON.stringify(firstname));
        localStorage.setItem("surname", JSON.stringify(surname));
      }
    } else {
      console.log(error);
    }
  }
  return (
    <div className={styles.background}>
      <Stack style={{width:"600px", margin:"-200px 0 0 -800px"}} >
        <Grid>
          <Grid.Col span={4}></Grid.Col>
          <div>
            <Stack h={50}>
              <div></div>
            </Stack>
            <Stack h={80}>
              <div style={{color:"white"}}>
                <h3>Welcome</h3>
                <h3>Please log in</h3>
              </div>
            </Stack>

            <form onSubmit={handleSubmit} style={{width:"400px"}}>
              <Stack h={400} justify="space-between">
                <TextInput
                  size="md"
                  radius="xs"
                  label="E-mail"
                  placeholder="E-mail"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  styles={{
                    label:{color:"white"},
                  }}
                />
                {error && <div style={{ color: "red" }}>{error}</div>}
                <PasswordInput
                  size="md"
                  radius="xs"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  styles={{
                    label:{color:"white"},
                  }}
                />
                {error && <div style={{ color: "red" }}>{error}</div>}
                <Button
                  variant="filled"
                  color="rgba(44, 46, 51, 1)"
                  size="md"
                  radius="xs"
                  type="submit"
                >
                  LOG IN
                </Button>
                <Link style={{color:"white", marginBottom:"10px", textDecorationLine:"none"}} href="/signup">Don't have a user? Sign up here</Link>
              </Stack>
            </form>
          </div>
        </Grid>
      </Stack>
    </div>
  );
}
