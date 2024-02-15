import Image from 'next/image'
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tiny House Low Tech - Low-tech Lab Bordeaux",
  description: 'Nous avons pour projet de construire une tiny house completement équipée de low-techs',
};
export default function Projets() {
  return (
    <div className='flex flex-col items-center'>

      <h2>
        Tiny House low-tech
      </h2>

      <div className='w-full max-w-xl h-64 relative'>
        <Image
          src={'/assets/pics/tiny_2.jpg'}
          alt="tiny house low tech"
          fill
          className="object-cover"
        />
      </div>

      <div className='flex flex-col w-full max-w-xl mt-4 px-2 sm:px-0'>
        <p>
          Le Low-tech Lab Bordeaux, en partenariat avec La Planche et le Tiny Lab, a pour projet de constuire une tiny house équipée de low-techs à Bordeaux.
        </p>


        <div className='w-full mt-4'>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/l8X9jxeYYmw?si=vZfYUhZRfofl-jLB" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>


        <p className='mt-8 font-bold text-center'>
          En partenariat avec
        </p>
        <div className='flex justify-center items-center'>
          <Link
            className='h-32 w-32 relative'
            href="https://laplanche-bois.fr/"
          >
            <Image
              src={'/assets/logos/tiny_lab_logo.png'}
              alt="la planche"
              fill
              className="object-contain"
            />
          </Link>
          <Link
            className='h-32 w-64 relative'
            href="https://tinylabassociation.dorik.io/"
          >
            <Image
              src={'/assets/logos/la_planche_logo.png'}
              alt="la planche"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </div >
  );
}
