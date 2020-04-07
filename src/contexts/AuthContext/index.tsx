import React, { useState, ReactChild, useEffect } from 'react';
import { auth, firebase } from '@src/services/firebase/auth';
import { User } from 'firebase';
import { useRouter } from 'next/router'

enum AuthStatus {
  'GUEST' = 'GUEST',
  'LOGGED_IN' = 'LOGGED_IN',
}

interface State {
  authStatus: AuthStatus;
  userData: User | null;
  signOut: () => void;
  signInWithGoogle: () => void;
}

interface Props {
  children: ReactChild;
}

const AuthContext = React.createContext<State | undefined>(undefined);

const AuthContextProvider = ({ children }: Props) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.GUEST);
  const [userData, setUserData] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUserData(authUser);
        setAuthStatus(AuthStatus.LOGGED_IN);
      } else {
        setAuthStatus(AuthStatus.GUEST);
        setUserData(null);
      }
    });
    return () => {
      unlisten();
    };
  });

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            setUserData(result?.user);
            setAuthStatus(AuthStatus.LOGGED_IN);
            router.replace('/');
          })
          .catch((e) => console.error(e.message));
      });
  };

  const signOut = async () => {
    await auth.signOut();
    setAuthStatus(AuthStatus.GUEST);
    setUserData(null);
    await router.replace('/');
  };

  return (
    <AuthContext.Provider
      value={{
        authStatus,
        userData,
        signOut,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return context;
};

export { AuthContextProvider, useAuthContext };
