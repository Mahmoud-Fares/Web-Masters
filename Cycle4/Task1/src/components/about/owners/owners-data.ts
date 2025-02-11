export type Owner = {
   id: number;
   name: string;
   position: string;
   imageUrl: string;
};

export const OWNERS: Owner[] = [
   {
      id: 1,
      name: 'Tom Cruise',
      position: 'Founder & Chairman',
      imageUrl: '/images/owners/owner-image-1.png',
   },
   {
      id: 2,
      name: 'Emma Watson',
      position: 'Managing Director',
      imageUrl: '/images/owners/owner-image-2.png',
   },
   {
      id: 3,
      name: 'Will Smith',
      position: 'Product Designer',
      imageUrl: '/images/owners/owner-image-3.png',
   },
];
