import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { AppProvider, ColorContext } from "../components/AppContext";
import React, { useContext } from "react";

function MyApp({ Component, pageProps }) {
  //const value = useContext(ColorContext);
  //console.log(value);
  return (
    <AppProvider>
      <div>
        <h1>Hello</h1>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </div>
    </AppProvider>
  );
}

export default MyApp;
