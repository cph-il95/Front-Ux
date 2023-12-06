import React, { useState } from "react";
import DateRangePicker from "@/components/organisms/datePicker"; // Adjust the path as necessary
import { MantineProvider, Grid, GridCol, Stepper } from "@mantine/core";
import ButtonBackBooking from "@/components/atoms/ButtonBackBooking";
import ButtonNextBooking from "@/components/atoms/ButtonNextBooking";
// import { useRouter } from 'next/router';

const HomePage = () => {
  // const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateSelection = (date) => {
    console.log("Selected Date before localstorage:", date);

    setSelectedDate(date);
    console.log("Selected Date in HomePage after:", date);
  };

  const handleNextClick = () => {
    Router.push("/booking/bookroom");
  };

  const [active] = useState(0);

  return (
    <>
      <Grid className="bookroom-steps">
        <GridCol span={6} offset={3}>
          <Stepper size="xs" active={active} allowNextStepsSelect={false}>
            <Stepper.Step label="Step 1"></Stepper.Step>
            <Stepper.Step label="Step 2"></Stepper.Step>
            <Stepper.Step label="Step 3"></Stepper.Step>
          </Stepper>
        </GridCol>
      </Grid>
      <div>
        <DateRangePicker
          onSelect={handleDateSelection}
          // selectedDate={selectedDate}
          // setStartDate={setStartDate}
          // setEndDate={setEndDate}
        />
        <MantineProvider />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
            padding: "0px 100px",
            paddingTop: "30px",
          }}
        >
          <ButtonBackBooking />
          <ButtonNextBooking onClick={handleNextClick} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
