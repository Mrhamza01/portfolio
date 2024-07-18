import React from 'react';
import SparklesText from '@/components/magicui/sparkles-text';

import IconCloud from '@/components/magicui/icon-cloud';
const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
];
const IdeaTwo = () => {
  return (
    <div className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <div className="flex">
        <SparklesText
          text="developer world revolves around these technologies"
          className='text-4xl font-bold text-center'
        />
        ;
      </div>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default IdeaTwo;
