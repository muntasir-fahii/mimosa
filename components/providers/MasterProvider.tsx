'use client';

import { usePathname } from 'next/navigation';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import FooterMini from '../shared/FooterMini';
import { ReactElement } from 'react';
import { chdir } from 'process';
import NavbarMini from '../shared/NavbarMini';

const MasterProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (
    (children as ReactElement)?.props?.childProp?.segment?.at(0) === 'notfound'
  ) {
    return <>{children}</>;
  }
  switch (pathname) {
    case '/':
      return (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      );

    case '/user/sign-in':
    case '/user/sign-up':
      return (
        <>
          <NavbarMini />
          {children}
          <FooterMini />
        </>
      );

    default:
      return (
        <>
          <Navbar />
          {children}
          <FooterMini />
        </>
      );
  }
};

export default MasterProvider;
