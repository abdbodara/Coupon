import { store } from "@/app/store";
import Layout from "@/components/header/Layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SelectedCardProvider } from "../context/createContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SelectedCardProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </SelectedCardProvider>
    </>
  );
}
