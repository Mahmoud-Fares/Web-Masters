import StatisticsCard from '@/components/about/statistics/statistics-card';
import Container from '@/components/container';

const STATISTICS = [
   {
      value: '10.5k',
      label: 'Sellers active our site',
      icon: '/images/statistics/statistics-icon-1.png',
      focus: false,
   },
   {
      value: '33k',
      label: 'Monthly Product Sale',
      icon: '/images/statistics/statistics-icon-2.png',
      focus: true,
   },
   {
      value: '45.5k',
      label: 'Customer active in our site',
      icon: '/images/statistics/statistics-icon-3.png',
      focus: false,
   },
   {
      value: '25k',
      label: 'Annual gross sale in our site',
      icon: '/images/statistics/statistics-icon-4.png',
      focus: false,
   },
];

export default function StatisticsSection() {
   return (
      <section className="py-section">
         <Container className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STATISTICS.map((statistic) => (
               <StatisticsCard key={statistic.value} {...statistic} />
            ))}
         </Container>
      </section>
   );
}
