import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mimosa | Sign In',
};

const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default SignInLayout;
