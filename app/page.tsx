import Follow from '@/components/Follow'

import { Encard } from '@/components/Encard'

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center ">
      <Encard title="Qui sommes-nous ?" image="/assets/pics/DSC03889.JPG">
        <p>
          Nous sommes une association qui croit au
          <b>&nbsp;pouvoir de l’innovation utile, accessible et durable&nbsp;</b>
          pour répondre aux enjeux d’aujourd’hui et de demain : les low-technologies offrent à chacun·e et partout, les moyens de
          <b>&nbsp;répondre à ses besoins dans le respect des Humain·es et de la Planète !&nbsp;</b>
        </p>
      </Encard>
      <Encard title="Sensibilisation" image="/assets/pics/DSC8146.jpg">
        <ul className='list-disc list-inside space-y-1'>
          <li>Organisation d’actions de sensibilisation auprès du
            <b>&nbsp;grand public, scolaires, collectivités et entreprises du territoire</b>.</li>
          <li>Animation de la communauté avec des
            <b>&nbsp;évènements, des conférences, des sorties, des apéros</b>, etc.</li>
        </ul>
      </Encard>
      <Encard title="Makerspace" image="/assets/pics/DSC03758.JPG">
        <ul className='list-disc list-inside space-y-1'>
          <li>Centre de pratique avec outillages professionnels mutualisés, formations, stages et ateliers.</li>
          <li>Ateliers hebdomadaires de conception et fabrication de low-tech avec les adhérent·es : tous les mercredis de 18h à 21h/</li>
          <li>Encadrement d’étudiant·es de l’enseignement supérieur.</li>
        </ul>
      </Encard>
      <Encard title="recherche et développement" image="/assets/pics/eolienne.jpg">
        <ul className='list-disc list-inside space-y-1'>
          <li>Mettre la low-tech au service de l’innovation.</li>
          <li>Favoriser l’émergence de solutions low-techs auprès des collectivités & entreprises.</li>
          <li>Diffuser en open source avec des outils collaboratifs.</li>
        </ul>
      </Encard>


      <Follow className='w-full' />

    </div>
  );
}
