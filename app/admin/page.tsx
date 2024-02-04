'use client'

import { refreshCache } from './actions';

export default function Page() {
    return (
        <div>
            <h2>Admin Page</h2>
            <button onClick={() => refreshCache()}>Revalidate</button>
        </div>
    );
}