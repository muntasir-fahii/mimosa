import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mimosa | Product Details',
};

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
