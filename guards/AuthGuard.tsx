import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AuthGuard = ({ children }: any) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'loading' && status !== 'authenticated' && !session) {
      console.log('Not authenticated');

      router.push('/'); // Redirect to login page
    }
  }, [status, session]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return children;
};

export default AuthGuard;
