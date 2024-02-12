import clsx from 'clsx';
import Image from 'next/image'
import Link from 'next/link'

export default function Follow({ className }: { className?: string }) {
    return (
        <div className={clsx(
            'w-full flex flex-wrap gap-4 md:gap-8 justify-center align-center',
            className
        )}>
            {[
                ["https://discord.gg/DHAfV7N43U", '/assets/socials/discord.svg', "Discord"],
                ["https://instagram.com/lowtechbordeaux", '/assets/socials/instagram.svg', "Instagram"],
                ["https://fb.com/lowtechbordeaux", '/assets/socials/facebook.svg', "Facebook"],
                ["https://linkedin.com/company/low-tech-lab-bordeaux", '/assets/socials/linkedin.svg', "Linkedin"],
                ["https://twitter.com/lowtechbordeaux", '/assets/socials/x.svg', "Twitter"],
                ["https://www.youtube.com/channel/UCXZS6Zgi09COLJkkgbbHBwg", '/assets/socials/youtube.svg', "Youtube"],
                ["https://github.com/lowtechbordeaux", '/assets/socials/github.svg', "Github"],
            ].map(([href, src, alt]) => (
                <Link
                    key={String(href)}
                    href={String(href)}
                    target="_blank"
                >
                    <div className="w-8 h-8 relative">
                        <img
                            src={src}
                            alt={String(alt)}
                            className='invert'
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
}
