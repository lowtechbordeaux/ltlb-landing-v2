'use client'

import Link from 'next/link';
import { refreshCache } from './actions';

const routes = [
    ["Agenda", "/agenda"],
    ["Nos Projets", "/projets"],
]

export default function Page() {
    return (
        <div className='flex flex-col items-center py-4'>
            <h2 className='mb-2'>Admin</h2>
            <div className='flex flex-col items-center p-4'>
                <h3 className='mb-2'>Revalidation</h3>
                <form action={refreshCache} className='flex flex-col items-center'>
                    <label htmlFor="secret">Secret</label>
                    <input type="password" name="secret" required className='border' />
                    <button
                        className='p-2 bg-black text-white mt-4'
                    >
                        Revalidate
                    </button>
                </form>
            </div>
            <h3 className='mb-2'>Pages cachées</h3>
            <div className='flex flex-col space-y-2 items-center'>
                {routes.map(([label, href]) => (
                    <Link
                        href={href}
                        key={href}
                        className="underline"
                    >
                        {label}
                    </Link>
                ))
                }
            </div>
        </div>
    );
}