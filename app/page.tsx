import Follow from '@/components/Follow'
import clsx from 'clsx';
import Image from 'next/image'

function Encard({ title, className, image, children }: { title: string, className?: string, image: string, children: React.ReactNode }) {
  return (
    <div
      className='flex flex-col md:flex-row md:even:flex-row-reverse  odd:bg-persian-green-800 even:bg-persian-green-600 '
    >
      <div className='relative w-full md:w-1/2 h-64 md:h-[16rem] md:aspect-square'>
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-center text-white px-4 py-8">
        <h2 className="mb-4">
          {title}
        </h2>

        <div className='text-sm'>
          {children}
        </div>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <main className="flex flex-col">
      <Encard title="Qui sommes-nous ?" image="/assets/pics/clim_1.jpg">
        <p>
          Nous sommes une association qui croit au
          <b>&nbsp;pouvoir de l’innovation utile, accessible et durable&nbsp;</b>
          pour répondre aux enjeux d’aujourd’hui et de demain : les low-technologies offrent à chacun·e et partout, les moyens de
          <b>&nbsp;répondre à ses besoins dans le respect des Humain·es et de la Planète !&nbsp;</b>
        </p>
      </Encard>
      <Encard title="Sensibilisation" image="/assets/pics/clim_2.jpg">
        <ul className='list-disc list-inside space-y-1'>
          <li>Organisation d’actions de sensibilisation auprès du
            <b>&nbsp;grand public, scolaires, collectivités et entreprises du territoire</b>.</li>
          <li>Animation de la communauté avec des
            <b>&nbsp;évènements, des conférences, des sorties, des apéros</b>, etc.</li>
        </ul>
      </Encard>
      <Encard title="Makerspace" image="/assets/pics/clim_1.jpg">
        <ul className='list-disc list-inside space-y-1'>
          <li>Centre de pratique avec outillages professionnels mutualisés, formations, stages et ateliers.</li>
          <li>Ateliers hebdomadaires de conception et fabrication de low-tech avec les adhérent·es : tous les mercredis de 18h à 21h/</li>
          <li>Encadrement d’étudiant·es de l’enseignement supérieur.</li>
        </ul>
      </Encard>
      <Encard title="recherche et développement" image="/assets/pics/clim_2.jpg">
        <ul className='list-disc list-inside space-y-1'>
          <li>Mettre la low-tech au service de l’innovation.</li>
          <li>Favoriser l’émergence de solutions low-techs auprès des collectivités & entreprises.</li>
          <li>Diffuser en open source avec des outils collaboratifs.</li>
        </ul>
      </Encard>


      <Follow />

    </main >
  );
}
