import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import CustomRouter from "./Routes/CustomRouter";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <CustomRouter />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
