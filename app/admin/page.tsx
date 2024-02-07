'use client'

import { refreshCache } from './actions';

export default function Page() {
    return (
        <div className='flex flex-col items-center p-4'>
            <h2 className='mb-2'>Admin</h2>
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
    );
}