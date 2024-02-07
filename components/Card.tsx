import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx';
import { ConditionalWrapper } from '@/lib/utils';

export default function Card(
    { title, description, image, alt, href }
        :
        { title: string, description: string, image: string, alt: string, href?: string }
) {
    return (
        <ConditionalWrapper wrapper={href && (children => <Link href={href}>{children}</Link>)}>
            <div
                className={clsx(
                    'border flex w-full px-4 py-4',
                    href && 'hover:bg-tradewind-50 cursor-pointer'
                )}
            >
                <div className='flex items-center mr-4'>
                    <div className='w-32 h-32 relative'>
                        <Image
                            src={image}
                            alt={alt}
                            fill
                        />
                    </div>
                </div>
                <div className='flex-1 flex flex-col'>
                    <h3>
                        {title}
                    </h3>
                    {description.split('\n').map((line, i) => (<p key={i}>{line}</p>))}
                </div>
            </div>
        </ConditionalWrapper>
    )
}