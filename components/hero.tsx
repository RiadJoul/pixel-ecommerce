'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";
import languages from '../langauges.json'

const Hero = () => {
    const { language } = useLanguage();
    const currentLanguage = languages[language];
    const [opacity, setOpacity] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setOpacity(100)
        }, 500);
    }, [])

  
    return (
        <section className="flex flex-col justify-center items-center h-screen bg-black">
            <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-36 lg:grid-cols-12">
                <div className="place-self-center mr-auto lg:col-span-7">
                    <h1 className="mb-1 text-3xl text-gray-100 lg:text-6xl font-semibold">
                        {currentLanguage["Protect Your Privacy"]} <br className="block" />
                        <span
                            className="inline-flex h-20 pt-2 text-primary overflow-x-hidden animate-type whitespace-nowrap will-change-transform"
                        >
                            {currentLanguage["with"]} GrapheneOS!
                        </span>
                        <span
                            className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor animate-pulse will-change-transform"
                        ></span>
                    </h1>

                    <p className="mb-6 max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">Pixel 4a / Pixel 4a 5G / Pixel 6a / Pixel 7a</p>
                    <Link href={"#products"} className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white duration-300 rounded-lg bg-primary hover:bg-primary-focus">
                        {currentLanguage["see devices"]}
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

                    </Link>
                    <Button variant={"outline"}
                        onClick={() => {
                        }}
                    >
                        {currentLanguage["buy now"]}
                    </Button>
                </div>
                <div className={`lg:mt-0 mt-3 lg:col-span-5 opacity-${opacity} transition-opacity ease-in duration-700`}>
                    <Image
                        width={2000}
                        height={2000}
                        src={"/Pixel4a.png"}
                        alt="grapheneOS"
                        referrerPolicy="no-referrer"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;