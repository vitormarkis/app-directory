import { Inter } from 'next/font/google';
import '../assets/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <h1>Olá mundo!</h1>
    </main>
  );
}
