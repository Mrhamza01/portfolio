import { cn } from '@/lib/utils';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    name: 'AI Summarizer',
    description:
      'An AI summarizer using GPT-4 to condense articles into concise summaries, leveraging NLP techniques to capture essential information.',
    projectLink: 'https://taupe-buttercream-cd5453.netlify.app',
    githubLink: 'https://github.com/Mrhamza01/AI-summarizer',
    image: '/projects/AiSummrizer.jpeg',
    techStack: ['React', 'GPT-4'],
  },
  {
    id: 2,
    name: 'AI Mock Interviewer',
    description:
      'A sophisticated web application for interview preparation using advanced AI technology, built with Next.js, PostgreSQL, and Gemini AI.',
    projectLink: 'https://mockinterviewer.vercel.app/',
    githubLink: 'https://github.com/Mrhamza01/mockinterviewer',
    image: '/projects/AiMockinterviwer.png',
    techStack: [' Typescript', 'Next.js', 'Prisma', 'PostgreSQL', 'Gemini AI'],
  },
  {
    id: 2,
    name: 'AI Mock Interviewer',
    description:
      'A sophisticated web application for interview preparation using advanced AI technology, built with Next.js, PostgreSQL, and Gemini AI.',
    projectLink: 'https://mockinterviewer.vercel.app/',
    githubLink: 'https://github.com/Mrhamza01/mockinterviewer',
    image: '/projects/AiMockinterviwer.png',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Gemini AI'],
  },
  {
    id: 2,
    name: 'AI Mock Interviewer',
    description:
      'A sophisticated web application for interview preparation using advanced AI technology, built with Next.js, PostgreSQL, and Gemini AI.',
    projectLink: 'https://mockinterviewer.vercel.app/',
    githubLink: 'https://github.com/Mrhamza01/mockinterviewer',
    image: '/projects/AiMockinterviwer.png',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Gemini AI'],
  },
];

const ProjectCard = ({ project }: any) => (
  <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full">
    <div className="relative h-48 w-full">
      <Image
        src={project.image}
        alt={project.name}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap mb-4">
        {project.techStack.map((tech: any, index: any) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a href={project.projectLink} className="text-blue-500 hover:underline">
          Demo
        </a>
        <a href={project.githubLink} className="text-blue-500 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
        My Projects
      </h1>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.3}
        duration={1}
        repeatDelay={0.5}
        className={cn(
          '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]',
          'absolute inset-x-0 inset-y-0 h-full'
        )}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
