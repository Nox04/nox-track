import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@src/components/layout';
import { useAuthContext } from '@src/contexts/AuthContext';

const SuccessPage: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;
  const { signIn } = useAuthContext();

  useEffect(() => {
    if (token) {
      signIn(token);
    }
  }, [token]);
  return (
    <Layout>
      <h1 className="text-white text-center">Redirecting...</h1>
    </Layout>
  );
};

export default SuccessPage;
