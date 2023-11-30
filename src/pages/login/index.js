import { Button, Grid, PasswordInput, Stack, TextInput } from "@mantine/core";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../components/backgroundImage.module.css";
import { useRouter } from "next/router";

export default function index() {
  const [email, setEmail] = useState("");
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

  return (
    <div className={styles.background}>
      <Stack h={1200}>
        <Grid>
          <Grid.Col span={2}></Grid.Col>
          <div>
            <Stack h={50}>
              <div></div>
            </Stack>
            <Stack h={80}>
              <div>
                <h2>Welcome</h2>
                <h2>Please log in</h2>
              </div>
            </Stack>

            <form onSubmit={handleSubmit}>
              <Stack h={400} justify="space-between">
                <TextInput
                  size="xl"
                  radius="xs"
                  label="E-mail"
                  placeholder="E-mail"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {error && <div style={{ color: "red" }}>{error}</div>}
                <PasswordInput
                  size="xl"
                  radius="xs"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {error && <div style={{ color: "red" }}>{error}</div>}
                <Button
                  variant="filled"
                  color="rgba(38, 18, 18, 1)"
                  size="xl"
                  radius="xs"
                  type="submit"
                >
                  LOG IN
                </Button>
                <Link href="/signup">Don't have a user? Sign up here</Link>
              </Stack>
            </form>
          </div>
        </Grid>
      </Stack>
    </div>
  );
}
