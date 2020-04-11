import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Callback: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    fetch('https://noxtracking.xyz/api/auth' + router.asPath)
      .then((response) => {
        console.log(response.json());
      })
      .then((data) => {
        console.log(data);
      });
  }, [router.asPath]);

  return <>Loading...</>;
};

export default Callback;
