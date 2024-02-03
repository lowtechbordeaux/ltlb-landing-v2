import Follow from '@/components/Follow';
import Image from 'next/image'
import Link from 'next/link'

export default function NousRencontrer() {
  return (
    <main className="container py-4">

      <h2 className="font-serif text-xl font-medium my-4">Nous rencontrer</h2>

      <p>
        Tous les <b>mercredis soir</b> (sauf exception), nous organisons des
        "ateliers" dans nos locaux au Garage Moderne entre membres adhérents,
        où nous construisons des low-techs.
        Ce sont des temps conviviaux où vous pourrez découvrir plus
        amplement l'association avec les bénévoles. N'hésitez pas à nous
        contacter pour en savoir plus !
      </p>
      <h2 className="font-serif text-xl font-medium my-4">En ligne</h2>
      <p>
        N'hesitez pas à prendre contact avec nous via nos réseaux.
        <br />
        Nous communiquons principalement autour de nos projets <b>sur Discord</b>, mais vous pouvez nous contacter sur les autres réseaux également.
      </p>
      <div className='flex space-x-2 justify-center flex-wrap my-4'>
        <Link
          href="https://discord.gg/DHAfV7N43U"
          target="_blank"
          className='flex items-center border p-2'
        >
          <div className="flex w-12 h-12 relative mr-2">
            <Image
              src="/assets/socials/discord.png"
              alt="discord"
              fill
            />
          </div>
          <span className='text-sm'>Rejoindre le serveur Discord</span>
        </Link>
        <Link
          href="mailto:contact@lowtechlab.org"
          target="_blank"
          className='flex items-center border p-2'
        >
          <div className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full relative mr-2">
            <div className="flex w-8 h-8 relative ">
              <Image
                src="/assets/icons/envelope-regular-w.svg"
                alt="mail"
                fill
                objectFit='fill'
                className='text-white'
              />
            </div>
          </div>
          <span className='text-sm'>Nous écrire par mail</span>
        </Link>
      </div>

      <h2 className="font-serif text-xl font-medium my-4">Où ?</h2>
      <p>
        Notre atelier est situé à la Cité Bleue, au

        <b> 176 Rue Achard, 33300 Bordeaux</b>
      </p>
      <div className='mt-4'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d975.6402104009594!2d-0.5461374303020609!3d44.87215159819189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDUyJzE5LjgiTiAwwrAzMic0My44Ilc!5e1!3m2!1sfr!2sfr!4v1706965800160!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Follow />
    </main >
  );
}
