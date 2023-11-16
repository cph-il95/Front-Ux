import { Button, PasswordInput, TextInput } from "@mantine/core";
import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  };

  async function loginUser() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <Button
          variant="filled"
          color="rgba(38, 18, 18, 1)"
          size="xl"
          radius="xs"
          type="submit"
        >
          LOG IN
        </Button>
        {/* <link href="./signup">
          <p>Don't have a user? Sign up here</p>
        </link> */}
      </form>
    </div>
  );
}
