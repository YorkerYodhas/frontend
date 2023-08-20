import Layout from '@/components/layout';
import AuthGuard from '@/guards/AuthGuard';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps?.session}>
      <AuthGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthGuard>
    </SessionProvider>
  );
}
