import React from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const Content404 = () => {
    const router = useRouter();
    return (
      <div className="max-w-sm m-8">
        <div className="text-white text-5xl md:text-6xl font-black">404</div>
        <div className="w-16 h-1 bg-blue-dark my-3 md:my-6" />
        <p className="text-white text-2xl md:text-3xl font-light mb-8 leading-normal">
          Sorry, the page you are looking for could not be found.
        </p>
        <button
          className="bg-transparent text-white font-bold uppercase tracking-wide py-3 px-6 border-2 border-grey-light hover:border-purple-700 rounded-lg"
          onClick={() => router.push('/')}
        >
          Go Home
        </button>
      </div>
    );
  };

  return (
    <div className="md:flex min-h-screen">
      <div className="hidden md:w-1/2 md:flex items-center justify-center">
        <Content404 />
      </div>
      <div
        className="flex pb-0 min-h-screen w-full md:w-1/2 bg-cover bg-no-repeat md:bg-right lg:bg-center justify-center"
        style={{ backgroundImage: "url('/403-illustration.svg')" }}
      >
        <div className="w-full flex md:hidden items-center justify-center ">
          <Content404 />
        </div>
      </div>
    </div>
  );
}
