import React, { useEffect } from 'react';
import Layout from '@src/components/layout';
import { useAuthContext } from '@src/contexts/AuthContext';

const Callback: React.FC = () => {
  const { checkSession } = useAuthContext();

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <Layout>
      <span className="text-white">Loading...</span>
    </Layout>
  );
};

export default Callback;
