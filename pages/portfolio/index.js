import Navbar from '../../components/Navbar';
import { Spring } from '@react-spring/web';

export default function Portfolio() {
  return (
    <div className="bg-quinary min-h-screen">
      <title>Portfolio</title>
      <Navbar />
      <main className="p-10">
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1000 }}>
          {props => (
            <div style={props}>
              <h1 className="text-4xl font-bold mb-5">My Projects</h1>
              {/* Add your project components here */}

              <h2 className="text-4xl font-bold mt-10 mb-5">Skills</h2>
              <ul className="text-secondary">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                {/* Add more skills as needed */}
              </ul>
            </div>
          )}
        </Spring>
      </main>
    </div>
  );
}
