import React, { useState } from "react";
import { Button, PasswordInput, TextInput, Grid, Stack } from "@mantine/core";
import { createClient } from "@supabase/supabase-js";
import ButtonBack from "@/components/atoms/ButtonBack";
import styles from "../../components/backgroundImage.module.css";
import Link from "next/link";

export default function Signup() {
  // state på de forskellige inputs
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // forbinder supabase auth
  const supabase = createClient(
    "https://mviilvaebgkbuyuwkrgd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12aWlsdmFlYmdrYnV5dXdrcmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzY0MTMsImV4cCI6MjAxNTcxMjQxM30.dD4TGrVJHss_rKckmilVjQC2n2kOv2V2GFUPO0VOwyY"
  );

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };
  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("signing up with", firstname, surname, email, password);
    signUpNewUser();
    saveUserData();
  };

  async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      firstname: firstname,
      surname: surname,
      email: email,
      password: password,
    });
  }

  async function saveUserData() {
    const { data, error } = await supabase
      .from("users")
      .insert([{ firstname, surname, email }]);
  }

  return (
    <div className={styles.background}>
      <Stack h={1200} justify="center" style={{width:"600px", margin:"-50px 0 0 -600px"}}>
        <Grid>
          <Grid.Col span={2}></Grid.Col>
          <div>
            <Stack h={80} style={{color:"white"}}>
              <div>
                <h3>Hello</h3>
                <h3>Please sign up to continue</h3>
              </div>
            </Stack>
            <form onSubmit={handleSubmit} style={{width:"400px"}} >
              <Stack h={450} justify="space-between" >
                <TextInput
                  size="md"
                  radius="xs"
                  label="Firstname"
                  placeholder="Firstname"
                  type="firstname"
                  value={firstname}
                  onChange={handleFirstnameChange}
                  required
                  styles={{
                    label:{color:"white"},
                  }}
                />
                <TextInput
                  size="md"
                  radius="xs"
                  label="Surname"
                  placeholder="Surname"
                  type="surname"
                  value={surname}
                  onChange={handleSurnameChange}
                  required
                  styles={{
                    label:{color:"white"},
                  }}
                />
                <TextInput
                  label="E-mail"
                  size="md"
                  placeholder="E-mail"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  styles={{
                    label:{color:"white"},
                  }}
                />
                <PasswordInput
                  size="md"
                  radius="xs"
                  label="Password"
                  description="Enter a password with minimum 8 characters"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  styles={{
                    label:{color:"white"},
                    description:{color:"white"}
                  }}
                />
                <Button
                  variant="filled"
                  color="rgba(44, 46, 51, 1)"
                  size="md"
                  radius="xs"
                  type="submit"
                >
                  SIGN UP
                </Button>
              </Stack>
            </form>
          </div>
          <Grid.Col span={2}></Grid.Col>
          <Stack justify="flex-end" style={{marginTop:"20px"}}>
            <Grid.Col span={1}>
              <Link href="/login">
                <ButtonBack />
              </Link>
            </Grid.Col>
          </Stack>
        </Grid>
      </Stack>
    </div>
  );
}
