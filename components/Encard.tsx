import { ConditionalWrapper } from '@/lib/utils'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export function Encard({ title, className, image, href, children }: { title: string, className?: string, image: string, href?: string, children: React.ReactNode }) {
    return (
        <div className="group w-full">
            <ConditionalWrapper
                wrapper={href && ((children) =>
                    <Link href={href}>{children}</Link>
                )}
            >
                <div
                    className={clsx(
                        'flex justify-center w-full group-even:bg-persian-green-600  group-odd:bg-persian-green-800',
                        href && 'group-hover:bg-persian-green-700 hover:cursor-pointer',
                        className
                    )}
                >
                    <div
                        className='flex flex-col w-full max-w-screen-xl md:flex-row md:group-even:flex-row-reverse'
                    >
                        <div
                            className={clsx(
                                'relative w-full md:w-1/2 h-64 md:h-[20rem] md:aspect-square ',
                                href && 'group-hover:brightness-90'
                            )}
                        >
                            <Image src={image} alt={title} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col md:w-1/2 h-64 md:h-full justify-center text-white px-4 md:px-8 py-8">
                            <h2>
                                {title}
                            </h2>

                            <div className='text-sm'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </ConditionalWrapper >
        </div>
    )
}