'use client';

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/data';
import { Button } from '.';
import { ProjectTag } from '@/data';

type ProjectsSectionProps = {};

const ProjectsSection: React.FC<
  ProjectsSectionProps
> = props => {
  const [tag, setTag] = useState<ProjectTag>(
    ProjectTag.All
  );

  const handleTagChange = (newTag: ProjectTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter(project =>
    tag ? project.tag.includes(tag) : true
  );

  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white my-4'>
        My Projects
      </h2>

      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <Button
          styles='rounded-full border-2  px-6 py-3 text-xl cursor-pointer'
          tagClick={handleTagChange}
          name={ProjectTag.All}
          isSelected={tag === ProjectTag.All}
        >
          {ProjectTag.All}
        </Button>
        <Button
          styles='rounded-full border-2  px-6 py-3 text-xl cursor-pointer'
          tagClick={handleTagChange}
          name={ProjectTag.Web}
          isSelected={tag === ProjectTag.Web}
        >
          {ProjectTag.Web}
        </Button>
        <Button
          styles='rounded-full border-2  px-6 py-3 text-xl cursor-pointer'
          tagClick={handleTagChange}
          name={ProjectTag.Mobile}
          isSelected={tag === ProjectTag.Mobile}
        >
          {ProjectTag.Mobile}
        </Button>
      </div>

      <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12'>
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
