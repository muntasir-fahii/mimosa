import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import MasterProvider from '@/components/providers/MasterProvider';

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
    <html lang='en'>
      <body
        className={cn(baiJamjuree.className, 'bg-light text-dark antialiased')}
      >
        <MasterProvider>{children}</MasterProvider>
      </body>
    </html>
  );
}
