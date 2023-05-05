import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary p-4">
      <ul className="flex justify-around">
        <li>
          <Link href="/">
            <span className="cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="cursor-pointer">About</span>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <span className="cursor-pointer">Portfolio</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="cursor-pointer">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

