import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import languages from '../langauges.json'
import { useLanguage } from '@/context/LanguageContext';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function NavBar() {
    const { language, toggleLanguage} = useLanguage();
    const currentLanguage = languages[language];

    return (
        <div className="fixed inset-x-0 top-0 bg-black z-[10] h-fit  py-2 ">
            <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl pt-5">
                {/* Logo */}
                <Link href={"/"} className="flex items-center gap-2">
                    <p className="rounded-lg text-white uppercase border-2 border-b-4 border-r-4 px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block border-white">
                        Pixel Guard
                    </p>
                </Link>
                <div className='flex space-x-5'>
                    <Select onValueChange={(val) => toggleLanguage(val)}>
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder={language == 'en' ? 'EN 🇬🇧' :  'NL 🇳🇱'} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="en" onClick={() => toggleLanguage('en')}>EN 🇬🇧</SelectItem>
                                <SelectItem value="nl" onClick={() => toggleLanguage('nl')}>NL 🇳🇱</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

            </div>
        </div>
    )
}
