import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { TechStackViz } from './components/TechStackViz';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="size-full relative bg-black">
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        <main id="hero">
          <Hero />
          <WorkExperience />
          <Projects />
          <TechStackViz />
          <Contact />
        </main>
      </div>
    </div>
  );
}