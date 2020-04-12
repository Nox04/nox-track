import React, { useState, ReactChild, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  clearSession,
  getSessionValues,
  saveSessionValues,
  verifySessionOnServer,
} from '@src/services/auth';

export enum AuthStatus {
  'GUEST' = 'GUEST',
  'LOGGED_IN' = 'LOGGED_IN',
}

interface State {
  authStatus: AuthStatus;
  userData: any | null;
  signOut: () => void;
  signInWithGoogle: () => void;
  redirectToLogin: () => void;
  redirectToProfile: () => void;
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

  const redirectToLogin = () => {
    router.push('/login');
  };

  const redirectToProfile = () => {
    router.push('/profile');
  };

  const signInWithGoogle = () => {
    router.replace('//noxtracking.xyz/api/auth/login/');
  };

  const checkSession = async () => {
    try {
      const token = await verifySessionOnServer(router.asPath);
      if (token) {
        setUserData(token);
        setAuthStatus(AuthStatus.LOGGED_IN);
        saveSessionValues(token);
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
        redirectToLogin,
        redirectToProfile,
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
