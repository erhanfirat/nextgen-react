import { useEffect } from "react";
import Main from "./layout/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Motivation } from "./components/Motivation";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;

{/* <ToastContainer position="bottom-center" />
<Motivation /> */}