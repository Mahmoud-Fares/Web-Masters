import Container from '@/components/container';
import CustomCarousel from '@/components/home/custom-carousel';
import SectionTitle from '@/components/section-header';

import CategoryCard, { CategoryCardProps } from './category-card';

const CATEGORIES_ITEMS: CategoryCardProps[] = [
   {
      title: 'Phones',
      href: '/categories/phones',
      icon: '/images/home/category/category-phone.svg',
   },
   {
      title: 'Computers',
      href: '/categories/computers',
      icon: '/images/home/category/category-computer.svg',
   },
   {
      title: 'SmartWatches',
      href: '/categories/smart-watches',
      icon: '/images/home/category/category-smartwatch.svg',
   },
   {
      title: 'Camera',
      href: '/categories/cameras',
      icon: '/images/home/category/category-camera.svg',
   },
   {
      title: 'Headphones',
      href: '/categories/headphones',
      icon: '/images/home/category/category-headphone.svg',
   },
   {
      title: 'Gaming',
      href: '/categories/gaming',
      icon: '/images/home/category/category-gaming.svg',
   },
];

export default function CategoriesSection() {
   return (
      <section className="py-section">
         <Container className="border-b py-section">
            <SectionTitle text="Categories">Browse By Category</SectionTitle>

            <CustomCarousel
               data={[...CATEGORIES_ITEMS, ...CATEGORIES_ITEMS]}
               renderItem={(item) => (
                  <CategoryCard
                     href={item.href}
                     title={item.title}
                     icon={item.icon}
                  />
               )}
               className="py-6"
               cols={2}
               smallCols={3}
               mediumCols={5}
               largeCols={6}
            />
         </Container>
      </section>
   );
}
