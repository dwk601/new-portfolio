import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <title>Home</title>
      <ul>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </main>
  )
}
