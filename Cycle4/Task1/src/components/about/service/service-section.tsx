import ServiceComponent from '@/components/about/service/service-component';
import Container from '@/components/container';

import Services1Svg from './icons/service-icon-1';
import Services2Svg from './icons/services-icon-2';
import Services3Svg from './icons/services-icon-3';

const SERVICES = [
   {
      svg: <Services1Svg />,
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
   },
   {
      svg: <Services2Svg />,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
   },
   {
      svg: <Services3Svg />,
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
   },
];

export default function ServiceSection() {
   return (
      <Container className="grid grid-cols-1 gap-10 pb-20 pt-16 md:grid-cols-2 lg:grid-cols-3">
         {SERVICES.map((service) => (
            <ServiceComponent
               key={service.title}
               svg={service.svg}
               title={service.title}
               description={service.description}
            />
         ))}
      </Container>
   );
}
