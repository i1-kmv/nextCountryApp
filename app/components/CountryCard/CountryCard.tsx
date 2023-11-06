import React, {FC} from 'react';
import {ICountry} from "@/app/page";
import Link from "next/link";
import Image from 'next/image'

interface ICountryCardProps {
    country: ICountry
}

const CountryCard:FC<ICountryCardProps> = ({country}) => {
    const {name, region, population, flags, capital} = country;
    return (
        <section className="flex flex-col container">
            <h1 className="text-5xl font-bold text-center text-gray-800 mt-16">
                {name.common}
            </h1>
            <Link href="/" className="flex items-center py-2 gap-1">
                Back
            </Link>
            <article className=" flex md:flex-row flex-col justify-between min-w-full p-10 bg-white rounded-xl">
                <section>
                    {country.capital && (
                        <h2 className="text-xl text-gray-800 mt-3">
                            <b>🏙️ Столица:</b> {capital[0]}
                        </h2>
                    )}
                    <h2 className="text-xl text-gray-800 mt-3">
                        <b>🗺️ Регион: </b>
                        {region}
                    </h2>
                    <h2 className="text-xl text-gray-800 mt-3">
                        <b>👨‍👩‍👧‍👦 Население: </b> {population}
                    </h2>
                </section>
                <div className="relative h-48 my-2 md:h-auto w-96 shadow-md md:order-last order-first">
                    <Image src={flags.svg} alt={flags.alt} fill />
                </div>
            </article>
        </section>
    );
};

export default CountryCard;
