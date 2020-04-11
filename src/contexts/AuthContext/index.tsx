import React, { useState, ReactChild, useEffect } from 'react';
import { useRouter } from 'next/router';
import { clearSession, getSessionValues, saveSessionValues } from '@src/services/auth';

enum AuthStatus {
  'GUEST' = 'GUEST',
  'LOGGED_IN' = 'LOGGED_IN',
}

interface State {
  authStatus: AuthStatus;
  userData: any | null;
  signOut: () => void;
  signInWithGoogle: () => void;
  checkSession: () => void;
}

interface Props {
  children: ReactChild;
}

const AuthContext = React.createContext<State | undefined>(undefined);

const AuthContextProvider = ({ children }: Props) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.GUEST);
  const [userData, setUserData] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = getSessionValues();
    if (token) {
      setUserData(token);
      setAuthStatus(AuthStatus.LOGGED_IN);
    }
  }, []);

  const signInWithGoogle = () => {
    router.replace('//noxtracking.xyz/api/auth/login/');
  };

  const checkSession = async () => {
    try {
      const response = await fetch('https://noxtracking.xyz/api/auth' + router.asPath);
      const result = await response.json();
      if (result?.access_token) {
        setUserData(result.access_token);
        setAuthStatus(AuthStatus.LOGGED_IN);
        saveSessionValues(result.access_token);
        router.replace('/');
      } else {
        router.replace('/login');
      }
    } catch (e) {
      router.replace('/login');
    }
  };

  const signOut = async () => {
    clearSession();
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
        checkSession,
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
