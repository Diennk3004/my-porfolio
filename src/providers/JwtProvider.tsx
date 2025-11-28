import { JwtContext } from "@/context";
import { useAppSelector } from "@/store";
import React from "react";
const JwtProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { user, isLoggedIn } = useAppSelector((state) => state.account);
  return <JwtContext value={{ isLoggedIn, user }}>{children}</JwtContext>;
};
export { JwtProvider };
