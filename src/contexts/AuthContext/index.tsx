import React, { useState, ReactChild } from 'react';
import { useRouter } from 'next/router';

enum AuthStatus {
  'GUEST' = 'GUEST',
  'LOGGED_IN' = 'LOGGED_IN',
}

interface State {
  authStatus: AuthStatus;
  userData: any | null;
  signOut: () => void;
  signInWithGoogle: () => void;
}

interface Props {
  children: ReactChild;
}

const AuthContext = React.createContext<State | undefined>(undefined);

const AuthContextProvider = ({ children }: Props) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.GUEST);
  const [userData, setUserData] = useState<any | null>(null);
  const router = useRouter();

  const signInWithGoogle = () => {
    window.location.href = 'https://noxtracking.xyz/api/auth/login/';
  };

  const signOut = async () => {
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
