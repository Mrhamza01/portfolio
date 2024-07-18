import Image from 'next/image';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Idea from './components/Idea';
import Projects from './components/Projects';
import IdeaTwo from './components/IdeaTwo';
export default function Home() {
  return (
    <div className='w-full h-full '>
      <Hero />
      <Idea />
      <Skills />
    <Projects />
    <IdeaTwo />
    </div>
  );
}
