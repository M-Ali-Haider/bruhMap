"use client";
import store from "@/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface RootLayoutProps {
  children: ReactNode;
}

export const ReduxStoreProvider = ({ children }: RootLayoutProps) => {
  return <Provider store={store}>{children}</Provider>;
};
