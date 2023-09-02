import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import './globals.css';

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Mimosa | Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#0091B5',
          colorSuccess: '#00B79F',
          colorWarning: '#FF7809',
          colorDanger: '#C3315D',
          colorBackground: '#F7F7F7',
          colorText: '#111618',
          colorTextSecondary: '#5a5a59',
          colorTextOnPrimaryBackground: '#ebf8fa',
        },
      }}
    >
      <html lang='en'>
        <body
          className={cn(
            baiJamjuree.className,
            'bg-light text-dark antialiased'
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
