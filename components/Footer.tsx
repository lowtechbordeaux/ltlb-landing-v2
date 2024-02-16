import Follow from "./Follow"
import Link from 'next/link'
import Mailchimp from "./Mailchimp";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="">
            <Follow className='bg-persian-green-900 py-8' />
            <Mailchimp />
            <div className="container py-4">
                <h2 className="text-center font-light">Partenaires</h2>
                <div className="flex flex-wrap justify-center items-center">
                    <div
                        className="h-20 w-full sm:w-40 flex items-center px-2">
                        <iframe
                            id="haWidget"
                            allowTransparency
                            src="https://www.helloasso.com/associations/low-tech-bordeaux/adhesions/adhesion-ltb/widget-bouton"
                            className="h-[70px] w-full"
                        />
                    </div>
                    {[
                        ['https://fse.gouv.fr/', '/assets/logos/UE-FSE.jpg', "Union Européene Fond Social Européen"],
                        ['https://www.nouvelle-aquitaine.fr', '/assets/logos/Region_Nouvelle-Aquitaine_drapeau.jpg', "Region nouvelle aquitaine"],
                        ['https://www.adampack.com/', '/assets/logos/adam-logo.png', 'Adam Pack'],
                    ].map(([url, image, alt]) => (
                        <Link
                            href={url}
                            key={url}
                            target="_blank"
                            className="relative h-24 w-20 mx-2"
                        >
                            <Image
                                src={image}
                                alt={alt}
                                fill
                                className="object-contain"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </footer >
    );
}