import MusicHeroDetails from './music-hero-details';
import MusicHeroImage from './music-hero-image';

export default function MusicHero() {
   return (
      <article className="mt-section flex flex-col gap-8 bg-black p-6 text-white lg:grid lg:grid-cols-2 lg:p-section xl:grid-cols-3">
         <MusicHeroDetails />

         <MusicHeroImage className="xl:col-span-2" />
      </article>
   );
}
