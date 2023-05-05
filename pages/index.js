import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const greetingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

export default function Home() {
  const controls = useAnimation();

  const animateBackground = async () => {
    while (true) {
      await controls.start({
        backgroundPositionX: '100%',
        transition: { duration: 5, ease: 'linear' },
      });
      await controls.start({
        backgroundPositionX: '0%',
        transition: { duration: 5, ease: 'linear' },
      });
    }
  };

  useEffect(() => {
    controls.start(animateBackground);
  }, [controls]);

  const gradientStyle = {
    background: `linear-gradient(314deg, #ffd6ff, #e7c6ff, #c8b6ff, #b8c0ff, #bbd0ff)`,
    backgroundSize: '1000% 1000%',
  };

  return (
    <motion.div
      className="min-h-screen"
      style={gradientStyle}
      animate={controls}
    >
      <title>Home</title>
      <Navbar />
      <main className="flex justify-center items-center h-full">
        <motion.h1
          className="text-5xl font-bold text-black"
          variants={greetingVariants}
          initial="hidden"
          animate="visible"
        >
            Welcome to My Portfolio
        </motion.h1>
      </main>
    </motion.div>
  );
}
