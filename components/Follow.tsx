import clsx from 'clsx';
import Image from 'next/image'
import Link from 'next/link'

export default function Follow({ className }: { className?: string }) {
    return (
        <div className={clsx('bg-background py-8', className)}>
            <h2 className="font-marker text-center font-medium">
                Suivre les actualités
            </h2>
            <div
                className="flex flex-wrap gap-4 md:gap-8 justify-center align-center"
            >
                {[
                    ["https://fb.com/lowtechbordeaux", '/assets/socials/facebook.png', "Facebook"],
                    ["https://twitter.com/lowtechbordeaux", '/assets/socials/twitter.png', "Twitter"],
                    ["https://instagram.com/lowtechbordeaux", '/assets/socials/instagram.png', "Instagram"],
                    ["https://www.youtube.com/channel/UCXZS6Zgi09COLJkkgbbHBwg", '/assets/socials/youtube.png', "Youtube"],
                    ["https://linkedin.com/company/low-tech-lab-bordeaux", '/assets/socials/linkedin.png', "Linkedin"],
                    ["https://discord.gg/DHAfV7N43U", '/assets/socials/discord.png', "Discord"],
                ].map(([href, src, alt]) => (
                    <Link
                        key={String(href)}
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
                    </Link>
                ))}
            </div>
        </div>
    );
}