import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link'
import React from 'react'
import languages from '../langauges.json'

export default function Footer() {
    const { language } = useLanguage();
    const currentLanguage = languages[language];
    return (
        <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
            <div className="border-t border-slate-900/5 py-10">
                <Link href={"/"} className="flex justify-center items-center gap-2">
                    <p className="rounded-lg text-black uppercase border-2 border-b-4 border-r-4 px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block border-black">
                        Pixel Guard
                    </p>
                </Link>
                <p className="mt-5 text-center text-sm leading-6 text-slate-500">© 2023 Pixel Guard Inc. All rights reserved.</p>
                <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
                    <p>{currentLanguage["Contact email"]}:  <span className='font-bold'>pixelguard@gmail.com</span></p>
                </div>
            </div>
        </footer>
    )
}
