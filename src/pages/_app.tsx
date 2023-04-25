import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='grid grid-cols-1 grid-rows-[1fr_minmax(500px,_auto)_1fr]'>
      <header>
        <nav className='container mx-auto flex justify-between py-4'>
          <h2 className='text-2xl font-bold font-mono'>
            <Link href='/'>Logo</Link>
          </h2>
          <ul className='flex gap-x-3 text-sm'>
            <li>
              <Link href='posts/first-post'>First Post</Link>
            </li>{" "}
            <li>Two</li> <li>Three</li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />

      <footer className='container mx-auto text-3xl'>
        Na the footer be this
      </footer>
    </div>
  );
}
