import {ICountry} from "@/app/page";
import CountryCard from "@/app/components/CountryCard/CountryCard";

async function getCountryByName(name:string): Promise<ICountry>{
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

    if (!res.ok) {
        throw new Error("Something went wrong :(");
    }

    const country = await res.json()

    return country[0];
}

export default async function CountryDetail({params: {name}} : {params: {name: string}}) {
    const country = await getCountryByName(name)
    return(
       <CountryCard country={country}/>
    )
}
