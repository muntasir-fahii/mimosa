import Link from "next/link";

const Navbar = () => {
  return (
    <header
      className="h-20 border-b border-gray
    flex items-center bg-white"
    >
      <div>
        {/* LEFT NAV */}
        <nav>
          <ul>
            <li>
              <Link href="/">Link 1</Link>
            </li>
            <li>
              <Link href="/">Link 2</Link>
            </li>
            <li>
              <Link href="/">Link 3</Link>
            </li>
          </ul>
        </nav>
        {/* MID NAV */}
        <nav>
          <ul>
            <li>
              <Link href="/">Mimosa.</Link>
            </li>
          </ul>
        </nav>
        {/*  RIGHT NAV */}
        <nav>
          {" "}
          <ul>
            <li>
              <Link href="/">Link 4</Link>
            </li>
            <li>
              <Link href="/">Link 5</Link>
            </li>
            <li>
              <Link href="/user/sign-in">Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
