import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider>
      {/* <UserContext.Provider value={contextValue}> */}
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      {/* </UserContext.Provider> */}
    </MantineProvider>
  );
}
