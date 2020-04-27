import React, { useState, ReactChild, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BACKEND_URL } from '@src/shared/constants';
import { clearSession, hasValidSession, saveSessionValue } from '@src/services/auth.service';
import { getUserData } from '@src/services/user.service';
import { User } from '@src/types';

export enum AuthStatus {
  'GUEST' = 'GUEST',
  'LOGGED_IN' = 'LOGGED_IN',
}

interface State {
  authStatus: AuthStatus;
  userData: any;
  signOut: () => void;
  signIn: (token: string | string[]) => void;
  signInWithGoogle: () => void;
}

interface Props {
  children: ReactChild;
}

const AuthContext = React.createContext<State | undefined>(undefined);

const AuthContextProvider = ({ children }: Props) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.GUEST);
  const [userData, setUserData] = useState<User>();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      setUserData(await getUserData());
    };

    const validSession = hasValidSession();
    setAuthStatus(validSession ? AuthStatus.LOGGED_IN : AuthStatus.GUEST);

    if (validSession) {
      getUser();
    }
  }, []);

  const signInWithGoogle = () => {
    router.replace(`${BACKEND_URL}/auth/google`);
  };

  const signOut = async () => {
    await router.replace('/');
    setAuthStatus(AuthStatus.GUEST);
    clearSession();
  };

  const signIn = async (token: string | string[]) => {
    saveSessionValue(token);
    await router.replace('/');
    setUserData(await getUserData());
    setAuthStatus(AuthStatus.LOGGED_IN);
  };

  return (
    <AuthContext.Provider
      value={{
        authStatus,
        userData,
        signOut,
        signIn,
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
