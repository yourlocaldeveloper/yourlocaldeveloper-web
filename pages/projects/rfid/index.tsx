import React from 'react';

import { SingleProjectView } from '@/components/organisms/SingleProjectView';

import rfid from '@/app/rfid.png';

const RfidPage: React.FC = ({}) => {
  return (
    <SingleProjectView
      bannerImage={rfid}
      title={'RFID Poker Table'}
      tags={[
        'TypeScript',
        'React',
        'React Native',
        'NextJS',
        'Express',
        'NodeJS',
        'Socket.io',
        'RFID Technology',
        'OBS',
      ]}
    >
      Details Coming Soon
    </SingleProjectView>
  );
};

export default RfidPage;
