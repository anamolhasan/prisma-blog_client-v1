import Link from 'next/link';
import React from 'react'

const NotFound = () => {
   return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-7xl font-bold text-gray-900">404</h1>

      <p className="mt-4 text-xl font-semibold text-gray-700">
        Page not found
      </p>

      <p className="mt-2 max-w-md text-gray-500">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        ← Go back home
      </Link>
    </div>
  );
}

export default NotFound