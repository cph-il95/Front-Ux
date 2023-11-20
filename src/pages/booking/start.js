import ButtonViewBooking from "@/components/atoms/ButtonViewBooking";
import { Button, Center, Stack } from "@mantine/core";
import { createClient } from "@supabase/supabase-js";
import React from "react";

export default function Start() {
  const supabase = createClient(
    "https://mviilvaebgkbuyuwkrgd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12aWlsdmFlYmdrYnV5dXdrcmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMzY0MTMsImV4cCI6MjAxNTcxMjQxM30.dD4TGrVJHss_rKckmilVjQC2n2kOv2V2GFUPO0VOwyY"
  );

  return (
    <div>
      <Center h={1000}>
        <div>
          <Stack justify="center">
            <Button
              variant="filled"
              size="xl"
              radius="xs"
              color="rgba(38, 18, 18, 1)"
            >
              Button
            </Button>
            <ButtonViewBooking></ButtonViewBooking>
          </Stack>
        </div>
      </Center>
    </div>
  );
}
