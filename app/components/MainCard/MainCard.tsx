import React, {FC} from 'react';
import {ICountry} from "@/app/page";
import Link from "next/link";
import Image from 'next/image'

interface IMainCardProps {
    countries: Array<ICountry>
}

const MainCard:FC<IMainCardProps> = ({countries}) => {
    return (
        <section className="grid grid-cols-5 w-full container gap-2 mt-16">
            {countries.map((country) => (
                <Link  key={country.name.common} href={`/country/${country.name.common}`}>
                    <article
                        className="h-64 min-w-full p-2 bg-white border-2 rounded-xl hover:border-indigo-200 transition-all"
                    >
                        <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl mb-5">
                            <Image src={country.flags.svg} alt={country.flags.alt} fill className="object-cover"/>
                        </div>
                        <h2 className="font-bold text-xl text-center mt-1">{country.name.common}</h2>
                    </article>
                </Link>
            ))}
        </section>
    );
};

export default MainCard;
