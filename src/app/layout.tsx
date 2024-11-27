import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeContextProvider from '@/context/ThemeContextProvider';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ThemeContextProvider>
        <body className={'bg-white dark:bg-black transition-colors'}>
          <Header />
          <div className='dark:bg-black'>{children}</div>
          <Footer />
        </body>
      </ThemeContextProvider>
    </html>
  );
}
