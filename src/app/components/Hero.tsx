'use client';

import Image from 'next/image';
import TypingAnimation from '@/components/magicui/typing-animation';
import { personaldata } from '../lib/data/personal';
import OrbitingCircles from '@/components/magicui/orbiting-circles';
import Meteors from '@/components/magicui/meteors';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import LetterPullup from '@/components/magicui/letter-pullup';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { Dock, DockIcon } from '@/components/magicui/dock';
import Link from 'next/link';

export type IconProps = React.HTMLAttributes<SVGElement>;
const Icons = {
  vite: '/icons/vite.svg',
  react: '/icons/react.svg',
  nextjs: '/icons/nextjs.svg',
  nodejs: '/icons/nodejs.svg',
  mysql: '/icons/mysql.svg',
  mongodb: '/icons/mongodb.svg',
  postgresql: '/icons/postgresql.svg',
  tailwindcss: '/icons/tailwindcss.svg',
  javascript: '/icons/javascript.svg',
  typescript: '/icons/typescript.svg',
  docker: '/icons/docker.svg',
};

const linkIcons = {
  github: '/icons/github.svg',
  linkedin: '/icons/linkedin.svg',
  whatsapp: '/icons/whatsapp.svg',
};

const Hero = () => {
  const showconfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  useEffect(() => {
    showconfetti();
  }, []);

  return (
    <div className="lg:flex lg:justify-between p-4 min-h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6 relative overflow-hidden">
        <div className="w-full absolute -z-10">
          <Meteors number={50} />
        </div>
        {personaldata.map((data, index) => (
          <div className="w-full" key={index}>
            <h1 className="font-extrabold text-4xl lg:text-6xl text-blue-700 mb-4">
              {data.name}
            </h1>
            <div className="flex justify-start mb-4">
              <LetterPullup words={data.professional} delay={0.05} />
            </div>
            <p className="text-base lg:text-lg font-mono text-slate-600 mb-8">
              {data.tagline}
            </p>
          </div>
        ))}

        <div className="z-10 flex flex-col  md:flex-row items-center md:gap-6 justify-start w-full">
          <div className='flex justify-center items-center justify-star'>
          <Link href="/resume/muhammad hamza.pdf" passHref legacyBehavior>
          <a download="muhammad hamza.pdf" rel="noopener noreferrer" target="_blank">
            <ShimmerButton
              shimmerSize="5em"
              className="shadow-2xl w-full sm:w-auto"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Download Resume
              </span>
            </ShimmerButton>
          </a>
        </Link>

          </div>
          <div className='flex  md:-mt-6' >
          <Dock magnification={60} distance={100}>
            <DockIcon className="bg-black/10 dark:bg-white/10 p-3 hover:bg-black/20 dark:hover:bg-white/20 transition-colors">
              <Link href="https://github.com/">
                <Image
                  src={linkIcons.github}
                  alt="GitHub"
                  width={30}
                  height={30}
                />
              </Link>
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10 p-3 hover:bg-black/20 dark:hover:bg-white/20 transition-colors">
              <Link href="https://github.com/">
                <Image
                  src={linkIcons.linkedin}
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </DockIcon>
          </Dock>
          </div>
        </div>
      </div>
      <div className="hidden w-1/2 md:flex justify-center lg:justify-end">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
            Full stack developer
          </span>
          {/* Inner Circles */}
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={10}
            delay={10}
            radius={80}
          >
            <Image
              src={Icons.tailwindcss}
              alt="Tailwind CSS"
              width={30}
              height={30}
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={15}
            delay={15}
            radius={80}
          >
            <Image
              src={Icons.typescript}
              alt="TypeScript"
              width={30}
              height={30}
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={80}
          >
            <Image
              src={Icons.javascript}
              alt="JavaScript"
              width={30}
              height={30}
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={25}
            delay={25}
            radius={80}
          >
            <Image src={Icons.react} alt="React" width={30} height={30} />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={30}
            delay={30}
            radius={80}
          >
            <Image src={Icons.vite} alt="Vite" width={30} height={30} />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={35}
            delay={35}
            radius={80}
          >
            <Image src={Icons.nextjs} alt="Next.js" width={30} height={30} />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={10}
            delay={0}
            reverse
          >
            <Image src={Icons.nodejs} alt="Node.js" width={50} height={50} />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            delay={5}
            reverse
          >
            <Image src={Icons.mongodb} alt="MongoDB" width={50} height={50} />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={25}
            delay={10}
            reverse
          >
            <Image
              src={Icons.postgresql}
              alt="PostgreSQL"
              width={50}
              height={50}
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={35}
            delay={15}
            reverse
          >
            <Image src={Icons.mysql} alt="MySQL" width={50} height={50} />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={45}
            delay={20}
            reverse
          >
            <Image src={Icons.docker} alt="Docker" width={50} height={50} />
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
};

export default Hero;
