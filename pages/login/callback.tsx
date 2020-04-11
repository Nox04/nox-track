import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@src/components/layout';
import { useAuthContext } from '@src/contexts/AuthContext';

const Callback: React.FC = () => {
  const router = useRouter();
  const { checkSession } = useAuthContext();

  useEffect(() => {
    checkSession();
  }, [router]);

  return (
    <Layout>
      <span className="text-white">Loading...</span>
    </Layout>
  );
};

export default Callback;
