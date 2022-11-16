import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  type DehydratedState
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "src/components/common/Layout";
import "../styles/globals.css";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps
}: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <>
      <Head>
        <title>PREFACE</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
