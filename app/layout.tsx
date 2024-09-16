import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'yourlocaldeveloper.com',
  description: 'Aaron Yates - Front End Web Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
