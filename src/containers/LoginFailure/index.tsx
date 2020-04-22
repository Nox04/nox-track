import React, { useEffect } from 'react';
import Layout from '@src/components/layout';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';
import { useRouter } from 'next/router';

const FailurePage: React.FC = () => {
  const { signInWithGoogle, authStatus } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === AuthStatus.LOGGED_IN) {
      router.push('/');
    }
  }, [authStatus, router]);
  return (
    <Layout>
      <h1 className="text-white text-center">Login failed</h1>
      <button data-testid="helloH1" className="text-xl text-center m-4" onClick={signInWithGoogle}>
        Try Again
      </button>
    </Layout>
  );
};

export default FailurePage;
