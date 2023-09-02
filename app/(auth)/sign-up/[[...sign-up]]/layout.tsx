import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mimosa | Sign Up',
};

const SignUPLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default SignUPLayout;
