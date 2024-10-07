import React from 'react';

import { SingleProjectView } from '@/components/organisms/SingleProjectView';

import screwfix from '@/app/screwfix.png';

const ScrewfixPage: React.FC = ({}) => {
  return (
    <SingleProjectView bannerImage={screwfix} title={'Screwfix'}>
      This project involved replacing a legacy monolith system, a Web Commerce
      Platform, with a modern, micro front end architecture to improve
      performance, scalability, and flexibility. The transition included the
      development of a component library to standardize and streamline the front
      end across various microservices. The new service also integrated
      essential third-party tools such a new CMS, enabling efficient content
      management, and digital experience platform for enhanced experimentation
      and personalization capabilities. <br /> A pixel-perfect implementation
      involves translating design mockups into a fully functional user interface
      that precisely matches every detail of the original design, down to the
      smallest element. This process requires close attention to layout,
      spacing, typography, and responsiveness, ensuring that the final product
      is visually identical across different devices and browsers. In achieving
      pixel perfection, I collaborated closely with designers to align on
      specifications, and utilized CSS, advanced layout techniques, and
      development tools to fine-tune the UI. This attention to detail not only
      enhanced the visual fidelity of the project but also improved the overall
      user experience by delivering a polished, cohesive interface that met both
      design and functional standards. <br /> In addition to architectural
      improvements, the project focused heavily on performance optimizations to
      deliver a faster, more responsive user experience. The entire development
      lifecycle was supported by a well-structured CI/CD pipeline, ensuring
      reliable and efficient deployments. This modernized solution enabled more
      rapid iterations and provided the foundation for further digital
      innovations.
    </SingleProjectView>
  );
};

export default ScrewfixPage;
