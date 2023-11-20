import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { UserContext } from "@/context/user-context";

export default function App({ Component, pageProps }) {
  const contextValue = {
    firstname,
    setFirstname,
    surname,
    setSurname,
    email,
    setEmail,
  };

  return (
    <MantineProvider>
      <UserContext.Provider value={contextValue}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </UserContext.Provider>
    </MantineProvider>
  );
}
