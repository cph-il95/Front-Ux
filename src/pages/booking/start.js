import ButtonViewBooking from "@/components/atoms/ButtonViewBooking";
import { Button, Center, Stack } from "@mantine/core";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import React from "react";
import styles from "../../components/backgroundImage.module.css";
import useUserContext from "@/context/user-context";

export default function Start() {
  const supabase = createClient(
    "https://mviilvaebgkbuyuwkrgd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12aWlsdmFlYmdrYnV5dXdrcmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzY0MTMsImV4cCI6MjAxNTcxMjQxM30.dD4TGrVJHss_rKckmilVjQC2n2kOv2V2GFUPO0VOwyY"
  );

  const contextValue = useUserContext();

  return (
    <div className={styles.background}>
      <Center h={1000}>
        <div>
          <Stack justify="center">
            <h2>Hi {Email} </h2>
            <Link href="">
              <Stack justify="center" h={130}>
                <Button
                  variant="filled"
                  size="xl"
                  radius="xs"
                  color="rgba(38, 18, 18, 1)"
                >
                  NEW BOOKING
                </Button>
              </Stack>
            </Link>
            <ButtonViewBooking></ButtonViewBooking>
          </Stack>
        </div>
      </Center>
    </div>
  );
}
