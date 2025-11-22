import { JwtContext } from "@/context";
import { useAppSelector } from "@/stores";
import React from "react";
const JwtProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const user = useAppSelector((state) => state.account.user);
  const isLoggedIn = useAppSelector((state) => state.account.isLoggedIn);
  return <JwtContext.Provider value={{ isLoggedIn, user }}>{children}</JwtContext.Provider>;
};
export { JwtProvider };
