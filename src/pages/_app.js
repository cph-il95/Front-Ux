import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider>
      <DefaultLayout>
        <h1>Layout Title</h1>
        <p>Description</p>
        <Component {...pageProps} />
      </DefaultLayout>
    </MantineProvider>
  );
}
