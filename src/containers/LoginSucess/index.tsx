import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@src/components/layout';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';
import { validToken } from '@src/services/auth.service';

const SuccessPage: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;
  const { signIn, authStatus } = useAuthContext();

  useEffect(() => {
    if (validToken(token)) {
      signIn(token);
    }
  }, [token]);

  useEffect(() => {
    if (authStatus === AuthStatus.LOGGED_IN) {
      router.push('/');
    }
  }, [authStatus, router]);

  return (
    <Layout>
      <h1 className="text-white text-center m-8">Redirecting...</h1>
    </Layout>
  );
};

export default SuccessPage;
