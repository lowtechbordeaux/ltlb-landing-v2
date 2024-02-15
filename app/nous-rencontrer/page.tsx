import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nous rencontrer - Low-tech Lab Bordeaux",
  description: "Tous les mercredis soir de 18h à 21h, nous organisons des ateliers dans nos locaux. Ce sont des temps conviviaux où vous pourrez découvrir plus amplement l'association avec les bénévoles. N'hésitez pas à nous contacter pour en savoir plus !",
};

export default function NousRencontrer() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className='flex justify-center w-full bg-persian-green-500'>
        <div className='flex w-full max-w-screen-xl h-[20rem] bg-persian-green-500'>
          <div className='relative hidden md:flex md:w-1/2'>
            <Image src="/assets/pics/atelier_wicking_main.jpg" alt="atelier_wicking_main" fill className="object-cover" />
          </div>
          <div className='relative w-full md:w-1/2'>
            <Image src="/assets/pics/DSC03618.JPG" alt="atelier_wicking_main" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full bg-persian-green-600 py-8 text-background px-4">
        <h2>Nous rencontrer</h2>

        <p className='w-full max-w-screen-sm'>
          Tous les <b>mercredis soir de 18h à 21h</b>, nous organisons des
          ateliers dans nos locaux.
          Ce sont des temps conviviaux où vous pourrez découvrir plus
          amplement l'association avec les bénévoles. N'hésitez pas à nous
          contacter pour en savoir plus !
        </p>
        <p className='w-full max-w-screen-sm'>
          <b>
            Des moments conviviaux  entre adhérent·es, où nous conceptualisons et fabriquons collectivement des low-techs.
          </b>
          N’hésitez pas à passer nous voir pour découvrir plus amplement l'association et rencontrer les bénévoles !
        </p>
        <p className='w-full max-w-screen-sm'>
          Notre atelier est situé à la <b>Cité Bleue</b>, au{' '}
          <Link
            href="https://maps.google.com/maps/dir//44.8721667,-0.5455/@44.8721667,-0.5455,18z"
            target="_blank"
            className='underline font-bold'
          >176 Rue Achard, 33300 Bordeaux</Link>
        </p>
      </div>
      <div className='flex justify-center w-full bg-persian-green-500'>
        <div className='w-full max-w-screen-xl h-[450px] bg-persian-green-500'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d975.6402104009594!2d-0.5461374303020609!3d44.87215159819189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDUyJzE5LjgiTiAwwrAzMic0My44Ilc!5e1!3m2!1sfr!2sfr!4v1706965800160!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col items-center w-full bg-persian-green-800 py-8 text-background px-4">
        <h2>REJOINDRE LA COMMUNAUTÉ EN LIGNE</h2>

        <p className='w-full max-w-screen-sm text-center'>
          Nous communiquons principalement autour de nos projets sur{' '}
          <Link
            href="https://discord.gg/DHAfV7N43U"
            target="_blank"
            className='underline font-bold'
          >Discord</Link>
        </p>
        <p className='w-full max-w-screen-sm text-center'>
          Vous pouvez également nous contacter par mail à{' '}

          <Link
            href="mailto:contact@lowtechbordeaux.org"
            target="_blank"
            className='underline font-bold'
          >contact@lowtechbordeaux.org
          </Link>
        </p>
      </div>
    </div >
  );
}
