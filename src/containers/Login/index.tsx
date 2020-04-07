import React from 'react';
import Layout from '@src/components/layout';
import { useAuthContext } from '@src/contexts/AuthContext';

const Login: React.FC = () => {
  const { signInWithGoogle } = useAuthContext();
  return (
    <Layout>
      <button data-testid="helloH1" className="text-xl text-center m-4" onClick={signInWithGoogle}>
        Login with Google
      </button>
    </Layout>
  );
};

export default Login;
