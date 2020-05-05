import React from 'react';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';
import Link from 'next/link';

interface SignInMessage {
  message: string;
}

const SignInMessage: React.FC<SignInMessage> = ({ message }: SignInMessage) => {
  const { authStatus } = useAuthContext();

  return (
    <>
      {authStatus === AuthStatus.GUEST && (
        <div className="py-4 lg:px-4">
          <Link href={`/login`} as={`/login`}>
            <a
              className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-indigo-500 px-2 py-1 text-xs font-bold mr-3">
                i
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">{message}</span>
              <svg
                className="fill-current opacity-75 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default SignInMessage;
