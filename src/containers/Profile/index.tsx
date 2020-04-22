import React, { useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';
import { useRouter } from 'next/router';
import { getUserData } from '@src/services/user.service';
import TimeAgo from 'react-timeago';

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<any>({});
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
      <div className="rounded-lg m-6 p-4 bg-gray-700 md:flex">
        <img
          src={userData?.picture}
          alt="Avatar"
          className="h-32 w-32 rounded-full mx-auto md:mx-1"
        />
        <div className="text-white text-center p-6 md:text-left">
          <h4 className="text-lg font-bold">{userData?.name}</h4>
          <h4>{userData?.email}</h4>
          <h4>
            Member since: <TimeAgo date={userData.createdTime} />
          </h4>
        </div>
      </div>
      <h4 className="text-white text-center">
        <button onClick={signOut}>Click here to logout</button>
      </h4>
    </Layout>
  );
};

export default Profile;
