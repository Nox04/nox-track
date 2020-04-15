import React, { useEffect } from 'react';
import Layout from '@src/components/layout';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const { signOut, authStatus } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === AuthStatus.GUEST) {
      router.push('/login');
    }
  }, [authStatus, router]);

  return (
    <Layout>
      <button className="text-xl text-center m-4" onClick={signOut}>
        Logout
      </button>
    </Layout>
  );
};

export default Login;
