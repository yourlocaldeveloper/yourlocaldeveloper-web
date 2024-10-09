import React from 'react';

import { SingleProjectView } from '@/components/organisms/SingleProjectView';

import rfid from '@/app/rfid.png';
import Link from 'next/link';

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
      A live demo video and overview of the project is coming soon. In the
      meantime, please check out the GitHub repos that I have now made public:
      <br />
      RFID Table Controller - React Native App:{' '}
      <Link
        href={'https://github.com/yourlocaldeveloper/thelocalgame_live_app'}
        target="_blank"
      >
        GitHub
      </Link>
      <br />
      Stream Overlay SPA & Back-end - Next.js & Express App:{' '}
      <Link
        href={'https://github.com/yourlocaldeveloper/thelocalgame'}
        target="_blank"
      >
        GitHub
      </Link>
    </SingleProjectView>
  );
};

export default RfidPage;
