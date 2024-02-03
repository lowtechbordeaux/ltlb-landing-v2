import Image from 'next/image'

import discordImage from '../public/assets/icons/discord.png'
import facebookImage from '../public/assets/icons/facebook.png'
import instagramImage from '../public/assets/icons/instagram.png'
import twitterImage from '../public/assets/icons/twitter.png'
import githubImage from '../public/assets/icons/github.png'
import linkedIn from '../public/assets/icons/linkedin.png'
import youtubeImage from '../public/assets/icons/youtube.png'
import ltlbImage from '@/assets/ltlb_full_transparent.png'

export default function Home() {
  return (
    <div className=''>
      <div className="flex flex-col items-center">
        <p className="font-serif text-center my-8 text-bluey-1 -rotate-6">
          « Apprendre à faire mieux avec moins »
        </p>
      </div>

      <main className="">
        <div className="text-white bg-greeny-1">
          <div className="container py-8">
            <h2 className="font-serif text-xl font-bold uppercase mb-4">
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
        <div>
          <h2 className="font-serif text-xl text-center font-medium mt-4">Nous suivre</h2>
          <div
            className="flex flex-wrap gap-4 md:gap-8 justify-center align-center py-6"
          >
            {[
              ["https://fb.com/lowtechbordeaux", facebookImage, "Facebook"],
              ["https://twitter.com/lowtechbordeaux", twitterImage, "Twitter"],
              ["https://instagram.com/lowtechbordeaux", instagramImage, "Instagram"],
              ["https://www.youtube.com/channel/UCXZS6Zgi09COLJkkgbbHBwg", youtubeImage, "Youtube"],
              ["https://linkedin.com/company/low-tech-lab-bordeaux", linkedIn, "Linkedin"],
              ["https://discord.gg/DHAfV7N43U", discordImage, "Discord"],
            ].map(([href, src, alt]) => (
              <a
                className="underline"
                href={String(href)}
                target="_blank"
              >
                <div className="w-12 h-12 relative">
                  <Image
                    src={src}
                    alt={String(alt)}
                    sizes='3rem'
                    fill
                  />
                </div>
              </a>
            ))}
          </div>
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
          </div>
        </div>

        <div>
          <div className="container py-4">
            <h2 className="font-serif text-xl font-medium my-4">Nos activités</h2>

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

            <h2 className="font-serif text-xl font-medium my-4">Nous rencontrer</h2>

            <p>
              Nous organisons régulièrment des "After-Low" les <b>mardis soir</b>,
              c'est-à-dire des temps conviviaux où vous pourrez découvrir plus
              amplement l'association avec les bénévoles. Le mardi, c'est permis!
            </p>
            <p>
              Vous pouvez aussi venir découvrir nos activités lors de nos ateliers
              adhérents, le <b>mercredi soir</b> ou le <b>samedi</b>.
            </p>
            <p>
              Vous pouvez aussi directement adhérer et participer dès maintenant
              aux activités de l'association ! Tous les savoirs-faire sont
              bienvenus, de la communication à la technique, de l'aide ponctuelle
              au projet de long terme.
            </p>

            <h2 className="font-serif text-xl font-medium my-4">Nos formations</h2>

            <p>
              Nous souhaitons déployer un catalogue de formations, ouvert au
              public, dans lequel les participant.e.s construisent une low-tech de
              A à Z. Pour l'instant, seules quelques formations sont prêtes à être
              données, mais nous prévoyons d'en construire de nouvelles dès cette
              année, avec l'aide du bureau Recherche et Développement de
              l'association, en particulier autour de la thématique du soleil
              (chauffage solaire, four, désalinisateur, etc.) et de la gestion de
              l'eau.
            </p>

            <div className="flex justify-center gap-8 mt-8">
              <a
                href="https://www.helloasso.com/associations/low-tech-bordeaux#event"
                target="_blank"
              >
                <div className="btn-primary border-yellowy-1">Billetterie</div>
              </a>
              <a
                href="https://www.helloasso.com/associations/low-tech-bordeaux/adhesions/adhesion-ltb"
                target="_blank"
              >
                <div className="btn-primary border-bluey-1">Adhésion</div>
              </a>
            </div>
          </div>
        </div>
      </main>

    </div >
  );
}
