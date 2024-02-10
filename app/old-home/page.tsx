import Image from 'next/image'

import Link from 'next/link'
import Follow from '@/components/Follow'

export default function Home() {
  return (
    <main className="flex flex-col">

      <div className=" text-white bg-greeny-1">
        <div className="container py-8">
          <h2 className="mb-4">
            Qui sommes-nous ?
          </h2>

          <p>
            Nous sommes une association qui croit au pouvoir de l’innovation
            utile, accessible et durable pour répondre aux enjeux d’aujourd’hui
            et de demain : les low-technologies offrent à chacun et partout, les
            moyens de répondre à ses besoins dans le respect des Humains et de
            la Planète !
          </p>

          <p className="font-serif text-center mt-4 mb-8 -rotate-6">
            « Son crédo: la Résilience ! »
          </p>

          <h2 className="text-xl font-bold text-yellowy-1 uppercase mb-4">
            3 activités principales:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="">
              <h3 className="text-lg font-medium font-serif mb-1">
                Sensibilisation
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Organisation d’actions de sensibilisation auprès du grand
                  public, scolaires, collectivités & entreprises du territoire.
                </li>
                <li>
                  Animation de la communauté avec des évènements, des
                  conférences, des sorties, des apéros, etc.
                </li>
              </ol>
            </div>
            <div className="">
              <h3 className="text-lg font-medium font-serif mb-1">Makerspace</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Centre de pratique avec outillages professionnels mutualisés,
                  formations, stages et ateliers.
                </li>
                <li>Encadrement d’étudiants de l’enseignement supérieur.</li>
                <li>
                  Espace coworking pour les entrepreneurs avec une démarche
                  low-tech.
                </li>
              </ol>
            </div>
            <div className="">
              <h3 className="text-lg font-medium font-serif mb-1">
                Bureau d’étude
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Mettre la low-tech au service de l’innovation avec son pôle
                  R&D.
                </li>
                <li>
                  Favoriser l’émergence de solutions low-techs auprès des
                  collectivités & entreprises.
                </li>
                <li>Diffuser en open source avec des outils collaboratifs.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-marker text-center my-8 text-bluey-1 -rotate-6">
          « Apprendre à faire mieux avec moins »
        </p>
      </div>

      <div className="bg-bluey-1 text-white">
        <div className="container py-8">
          <h2 className="font-serif text-xl font-medium mb-4">
            Qu’est-ce qu’une low-tech ?
          </h2>

          <p>
            « Une technologie simple répondant à un besoin de base, qui est
            durable dans le temps, facilement utilisable et constructible, mais
            est aussi une technologie incluant de la sobriété et participant à
            votre résilience. »
          </p>

          <div className='flex flex-wrap justify-center mt-8 space-x-2'>
            <Link
              href="https://lowtechlab.org/"
              target="_blank"
            >
              <div className="border border-dashed p-2 border-white text-center">
                En savoir plus sur lowtechlab.org
              </div>
            </Link>
          </div>
        </div>

      </div>

      <div className="container flex flex-col space-y-2 my-4">
        <h2 className="font-serif text-xl font-medium my-2">Nos activités</h2>

        <p>
          La low-tech nous semble être un outil majeur pour la transition
          écologique et énergétique, il est donc nécessaire que le plus de
          monde possible soit informé sur ce que c'est et quelles sont ses
          applications.
        </p>

        <p>
          À cette fin, nous pouvons intervenir pour une large variété de
          publics, allant des scolaires aux salariés d'entreprises dans des
          ateliers dédiés, en passant par les stands d'exposition et les
          conférences ou tables rondes.
        </p>

        <p>
          Notre atelier est lui aussi tourné vers la transmission des
          connaissances et de l'apprentissage de la démarche low-tech. Pour ce
          faire, nous organisons régulièrement des stages sur une thématique
          spécifique, et nous mettons petit à petit en place un catalogue de
          formation couvrant diverses thématiques pour augmenter votre
          autonomie et faire des économies. C'est aussi un lieu où se
          retrouvent les adhérents pour co-construire les projets de
          l'association et participer à ses missions d'intérêt général.
        </p>

        <p>
          Les low-techs que nous fabriquons sont conçues, construites et
          testées par le bureau de Recherche & Développement de l'association,
          pour être capable de vous fournir des données d'utilisation, de
          mieux comprendre le fonctionnement des low-techs fabriquées, et
          adapter les solutions aux besoins spécifiques du territoire. Toutes
          les low-techs proposées par l'association sont donc réellement
          utiles, elles participent concrètement à la résilience et
          l'autonomie des personnes et des structures collectives.
        </p>
        <p>
          Low-Tech Bordeaux est uniquement composé de bénévoles.
        </p>
      </div>
      <div className="bg-bluey-1 text-white py-8">
        <div className="container">
          <h2 className="font-serif text-xl font-medium mb-4">
            Nous soutenir
          </h2>
          <p>
            Vous pouvez directement adhérer et participer dès maintenant
            aux activités de l'association ! Nous soutenir financièrement ou
            participer à nos activités permet de nous soutenir. Quelles que
            soient les compétences et connaissances que vous voulez apporter,
            vous serez bienvenus , de l'aide ponctuelle au projet de long terme.
          </p>
          <div className='flex flex-wrap justify-center mt-4 space-x-2'>
            <Link
              href="https://www.helloasso.com/associations/low-tech-bordeaux/adhesions/adhesion-ltb"
              target="_blank"
            >
              <div className="border border-dashed p-2 border-white text-center">
                Adhérer
              </div>
            </Link>
            <Link
              href="/nous-rencontrer"
            >
              <div className="border border-dashed p-2 border-white text-center">
                Nous rencontrer
              </div>
            </Link>
          </div>
        </div>

      </div>
      <Follow />

    </main>
  );
}
