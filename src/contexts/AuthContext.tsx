import { useState, ReactNode, createContext, useMemo } from "react";

import { firebase, auth } from "../services/firebase";

type IUser = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: IUser | undefined;
  signInWithGoogle: () => Promise<void>;
};
type AuthContextProviderProps = {
  children: ReactNode;
};

// export const AuthContext = React.createContext({} as AuthContextType);
export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const { children } = props;
  const [user, setUser] = useState<IUser>();

  // const unsubscribe = auth.onAuthStateChanged((loggedUser) => {
  //   if (loggedUser) {
  //     const { displayName, photoURL, uid } = loggedUser;

  //     if (!displayName || !photoURL) {
  //       throw new Error("Missing information from google acount");
  //     }
  //     setUser({
  //       id: uid,
  //       name: displayName,
  //       avatar: photoURL,
  //     });
  //   }
  // });
  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from google account");
      }
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });
    }
  }

  const providerProps = useMemo(() => ({ user, signInWithGoogle }), [user]);

  return (
    <AuthContext.Provider value={providerProps}>
      {children}
    </AuthContext.Provider>
  );
}
