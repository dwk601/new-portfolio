import Navbar from '../../components/Navbar';
import { Spring } from '@react-spring/web';

export default function About() {
  return (
    <div className="bg-quinary min-h-screen">
      <title>About</title>
      <Navbar />
      <main className="p-10">
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1000 }}>
          {props => (
            <div style={props}>
              <h1 className="text-4xl font-bold mb-5">About Me</h1>
              <div className="flex">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="rounded-full mr-5"
                />
                <p className="text-secondary">
                  Hi, I'm [Your Name], a passionate software developer based in [Your Location]. I have experience in web development, particularly in frontend technologies like React, Next.js, and Tailwind CSS. In my free time, I enjoy learning new technologies and working on personal projects. Feel free to explore my portfolio to learn more about my skills and experience.
                </p>
              </div>
            </div>
          )}
        </Spring>
      </main>
    </div>
  );
}