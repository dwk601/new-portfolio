import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

const greetingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

export default function Home() {
  return (
    <div className="bg-quinary min-h-screen">
      <title>Home</title>
      <Navbar />
      <main className="flex justify-center items-center h-full">
        <motion.h1
          className="text-5xl font-bold"
          variants={greetingVariants}
          initial="hidden"
          animate="visible"
        >
          Welcome to My Portfolio
        </motion.h1>
      </main>
    </div>
  );
}
