import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = async () => {
    const result = await signIn('asgardeo');
    console.log(result);

    // router.push('/explore');
  };

  return (
    <main className='flex min-h-screen flex-col items-start justify-between pb-8'>
      <div className='w-full relative'>
        <img src='/images/mars.png' className='w-[480px] absolute -right-24 -top-24'></img>
      </div>

      <div className='flex flex-col gap-4 mb-8'>
        <h1 className='text-6xl font-black text-primary'>Explore the cosmos with us.</h1>
        <div>
          <Button variant={'secondary'} onClick={handleGetStarted}>
            Get Started
          </Button>
        </div>
      </div>
    </main>
  );
}
