import React, { useEffect } from 'react';
import Layout from '@src/components/layout';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';
import { useRouter } from 'next/router';
import GoogleButton from '@src/components/GoogleButton';

const Login: React.FC = () => {
  const { authStatus } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === AuthStatus.LOGGED_IN) {
      router.push('/profile');
    }
  }, [authStatus, router]);

  return (
    <Layout>
      <GoogleButton />
    </Layout>
  );
};

export default Login;
