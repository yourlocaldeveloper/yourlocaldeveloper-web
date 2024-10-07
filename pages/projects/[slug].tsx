import React from 'react';
import { useRouter } from 'next/router';

const ProjectsSlugPage: React.FC = ({}) => {
  const router = useRouter();

  return <div>Page: {router.query.slug}</div>;
};

export default ProjectsSlugPage;
