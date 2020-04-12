import React, { useEffect } from 'react';
import Layout from '@src/components/layout';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';

const Login: React.FC = () => {
  const { signInWithGoogle, authStatus, redirectToProfile } = useAuthContext();

  useEffect(() => {
    if (authStatus === AuthStatus.LOGGED_IN) {
      redirectToProfile();
    }
  }, [authStatus]);

  return (
    <Layout>
      <button data-testid="helloH1" className="text-xl text-center m-4" onClick={signInWithGoogle}>
        Login with Google
      </button>
    </Layout>
  );
};

export default Login;
