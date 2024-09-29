import React from 'react';

import { HomeView } from '@/components/organisms/HomeView';
import { ComingSoonView } from '@/components/organisms/ComingSoonView';

const LandingPage: React.FC = () => {
  const isWebsiteLive = false;

  return isWebsiteLive ? <HomeView /> : <ComingSoonView />;
};

export default LandingPage;
