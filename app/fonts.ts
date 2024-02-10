import { Oswald, Montserrat, Permanent_Marker } from 'next/font/google'

export const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-oswald',
})

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
})

export const permanent_Marker = Permanent_Marker({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-permanent-marker',
})

export const fontClasses = `${montserrat.variable} ${oswald.variable} ${permanent_Marker.variable}`