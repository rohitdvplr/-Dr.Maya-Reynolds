import "./globals.css";
import {Newsreader,Figtree} from "next/font/google";
const head=Newsreader({subsets:["latin"],variable:"--font-head"});
const body=Figtree({subsets:["latin"],variable:"--font-body"});
export const metadata={title:"Anxiety, Trauma & Burnout Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
description:"Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica offering anxiety, panic, trauma, burnout and perfectionism therapy for adults, in person or by secure telehealth across California."};
export default function L({children}){return <html lang="en" className={`${head.variable} ${body.variable}`}><body>{children}</body></html>}
