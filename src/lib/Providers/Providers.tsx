"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
}
