import React, { useEffect } from 'react';
import Layout from '@src/components/layout';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';
import { useRouter } from 'next/router';
import GoogleButton from '@src/components/GoogleButton';

const FailurePage: React.FC = () => {
  const { authStatus } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === AuthStatus.LOGGED_IN) {
      router.push('/');
    }
  }, [authStatus, router]);
  return (
    <Layout>
      <h1 className="text-white text-center m-8">Login failed</h1>
      <GoogleButton />
    </Layout>
  );
};

export default FailurePage;
