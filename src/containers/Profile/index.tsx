import React, { useEffect } from 'react';
import Layout from '@src/components/layout';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';

const Login: React.FC = () => {
  const { signOut, authStatus, redirectToLogin } = useAuthContext();
  useEffect(() => {
    if (authStatus === AuthStatus.GUEST) {
      redirectToLogin();
    }
  }, [authStatus]);
  return (
    <Layout>
      <button className="text-xl text-center m-4" onClick={signOut}>
        Logout
      </button>
    </Layout>
  );
};

export default Login;
