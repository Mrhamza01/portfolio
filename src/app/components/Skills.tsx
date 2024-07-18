import Image from 'next/image';
import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';

const icon = [
  {
    name: 'html',
    img: '/icons/html.svg',
  },
  {
    name: 'html',
    img: '/icons/css.svg',
  },
  { name: 'tailwindcss', img: '/icons/tailwindcss.svg' },
  { name: 'shadcn', img: '/icons/shadcn.svg' },
  { name: 'matrialui', img: '/icons/materialui.svg' },
  { name: 'typescript', img: '/icons/typescript.svg' },
  { name: 'react', img: '/icons/react.svg' },
  { name: 'javascript', img: '/icons/javascript.svg' },
  { name: 'nodejs', img: '/icons/nodejs.svg' },
  { name: 'vite', img: '/icons/vite.svg' },
  { name: 'nextjs', img: '/icons/nextjs.svg' },
  { name: 'mysql', img: '/icons/mysql.svg' },
  { name: 'mongodb', img: '/icons/mongodb.svg' },
  { name: 'postgresql', img: '/icons/postgresql.svg' },
  { name: 'restapi', img: '/icons/api.svg' },
  { name: 'graphql', img: '/icons/graphql.svg' },
  { name: 'docker', img: '/icons/docker.svg' },
  { name: 'kubernetes', img: '/icons/kubernetes.svg' },
  { name: 'redux', img: '/icons/redux.svg' },
  { name: 'django', img: '/icons/django.svg' },
  { name: 'python', img: '/icons/python.svg' },
];

const firstRow = icon.slice(0, icon.length / 2);
const secondRow = icon.slice(icon.length / 2);

const ReviewCard = ({ name, img }: { name: string; img: string }) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="w-32 h-32 relative">
          <Image
            src={img}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col items-center">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {}

const Skills = () => {
  return (
    <>
      
        <h1 className="flex justify-center mx-auto pt-4 pb-2 font-bold text-5xl ">
          My <span className='ml-3 bg-emerald-400'>Skills</span></h1>
        <p className=" flex justify-center mx-auto pb-3  text-slate-600 text-sm">
          Here are some of the technologies I have worked with.
        </p>
      
      <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:30s]">
          {icon.map((review, index) => (
            <ReviewCard key={index} name={review.name} img={review.img} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {icon.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
};

export default Skills;
