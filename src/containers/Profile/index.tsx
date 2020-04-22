import React, { useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';
import { useRouter } from 'next/router';
import { getUserData } from '@src/services/user.service';

const Profile: React.FC = () => {
  const [userData, setUserData] = useState({});
  const { signOut, authStatus } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === AuthStatus.GUEST) {
      router.push('/login');
    } else if (authStatus === AuthStatus.LOGGED_IN) {
      getUserData().then((res) => {
        setUserData(res);
      });
    }
  }, [authStatus, router]);

  return (
    <Layout>
      <ul className="text-white text-center">
        {Object.entries(userData).map((key: any) => {
          return (
            <li key={key}>
              <span>{key}</span>
            </li>
          );
        })}
      </ul>
      <button className="text-xl text-center m-4" onClick={signOut}>
        Logout
      </button>
    </Layout>
  );
};

export default Profile;
