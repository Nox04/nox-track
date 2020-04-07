import React from 'react';
import Layout from '@src/components/layout';
import { useAuthContext } from '@src/contexts/AuthContext';

const Login: React.FC = () => {
  const { signOut } = useAuthContext();
  return (
    <Layout>
      <button className="text-xl text-center m-4" onClick={signOut}>
        Logout
      </button>
    </Layout>
  );
};

export default Login;
