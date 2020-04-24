import React from 'react';
import { useAuthContext } from '@src/contexts/AuthContext';

const GoogleButton = () => {
  const { signInWithGoogle } = useAuthContext();
  return (
    <button
      data-testid="helloH1"
      className="text-xl text-center mx-auto my-8 flex bg-blue-800 rounded"
      onClick={signInWithGoogle}
    >
      <div className="bg-white p-4 rounded-l">
        <img
          className="w-8 h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <span className="font-bold text-white text-base p-4">Sign in with google</span>
    </button>
  );
};

export default GoogleButton;
