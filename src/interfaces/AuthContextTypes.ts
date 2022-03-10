import { ReactNode } from "react";

export type IUser = {
  id: string;
  name: string;
  avatar: string;
};

export type AuthContextType = {
  user: IUser | undefined;
  signInWithGoogle: () => Promise<void>;
};

export type AuthContextProviderProps = {
  children: ReactNode;
};
