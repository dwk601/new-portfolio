import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export default function Contact() {
  return (
    <div className="bg-quinary min-h-screen">
      <title>Contact</title>
      <Navbar />
      <main className="p-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <h1 className="text-4xl font-bold mb-5">Contact</h1>
          <ul className="text-secondary">
            <li>Email: [your-email@example.com]</li>
            <li>LinkedIn: [linkedin.com/in/your-username]</li>
            <li>GitHub: [github.com/your-username]</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}
