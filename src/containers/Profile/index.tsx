import React from 'react';
import Layout from '@src/components/layout';
import { useAuthContext } from '@src/contexts/AuthContext';
import { useRouter } from 'next/router';
import TimeAgo from 'react-timeago';
import useSWR from 'swr';
import { APIService } from '@src/services/api.service';
import { User } from '@src/types';

const Profile: React.FC = () => {
  const { signOut, userData } = useAuthContext();
  const router = useRouter();
  const { id: userId } = router.query;

  const { data: user, error } = useSWR<User>(userId ? `/user/${userId}` : null, APIService.getData);

  return (
    <Layout>
      <div className="rounded-lg m-6 p-4 bg-gray-700 md:flex">
        <img src={user?.picture} alt="Avatar" className="h-32 w-32 rounded-full mx-auto md:mx-1" />
        <div className="text-white text-center p-6 md:text-left">
          <h4 className="text-lg font-bold">{user?.name}</h4>
          <h4>{user?.email}</h4>
          <h4>
            Member since: <TimeAgo date={user?.createdTime || ''} />
          </h4>
        </div>
      </div>
      {userId === userData?.id && (
        <h4 className="text-white text-center">
          <button onClick={signOut}>Click here to logout</button>
        </h4>
      )}
    </Layout>
  );
};

export default Profile;
