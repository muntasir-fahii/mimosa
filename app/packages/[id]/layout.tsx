import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mimosa | Package Details',
};

export default function PackagesDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
