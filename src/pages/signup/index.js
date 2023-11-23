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
  };

  async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      firstname: firstname,
      surname: surname,
      email: email,
      password: password,
    });
  }

  return (
    <div className={styles.background}>
      <Stack h={1200} justify="center">
        <Grid>
          <Grid.Col span={2}></Grid.Col>
          <div>
            <Stack h={80}>
              <div>
                <h2>Hello</h2>
                <h2>Please sign up to continue</h2>
              </div>
            </Stack>
            <form onSubmit={handleSubmit}>
              <Stack h={610} justify="space-between">
                <TextInput
                  size="xl"
                  radius="xs"
                  label="Firstname"
                  placeholder="Firstname"
                  type="firstname"
                  value={firstname}
                  onChange={handleFirstnameChange}
                  required
                />
                <TextInput
                  size="xl"
                  radius="xs"
                  label="Surname"
                  placeholder="Surname"
                  type="surname"
                  value={surname}
                  onChange={handleSurnameChange}
                  required
                />
                <TextInput
                  label="E-mail"
                  placeholder="E-mail"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <PasswordInput
                  size="xl"
                  radius="xs"
                  label="Password"
                  description="Enter a password with minimum 8 characters"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <Button
                  variant="filled"
                  color="rgba(38, 18, 18, 1)"
                  size="xl"
                  radius="xs"
                  type="submit"
                >
                  SIGN UP
                </Button>
              </Stack>
            </form>
          </div>
          <Grid.Col span={4}></Grid.Col>
          <Stack justify="flex-end">
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
