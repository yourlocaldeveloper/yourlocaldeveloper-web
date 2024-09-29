import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['200', '400', '600', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

import '@/styles/reset.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className} style={{ height: '100px' }}>
      {/* <Header /> */}
      <Component {...pageProps} />
    </main>
  );
}
