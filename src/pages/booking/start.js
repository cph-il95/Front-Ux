import ButtonViewBooking from "@/components/atoms/ButtonViewBooking";
import { Button, Center, Stack } from "@mantine/core";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../components/backgroundImage.module.css";

export default function Start() {
  const [email, setEmail] = useState([]);

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (email) {
      setEmail(email);
    }
  }, []);

  return (
    <div className={styles.background}>
      <Center h={1000}>
        <div>
          <Stack justify="center">
            <h2>Hi {email}</h2>
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
