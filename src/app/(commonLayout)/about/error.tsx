"use client";

import { useEffect } from "react";

const AboutError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset:()=> void
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h1>Something with wrong: please try again later</h1>
      <button onClick={()=> reset()}>
        Try again
      </button>
    </div>
  );
};

export default AboutError;
