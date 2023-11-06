import { MainCard } from "@/app/components/MainCard";

export interface ICountry {
    name: {
        common: string;
    },
    flags: {
        svg: string,
        alt: string
    }
    capital: string[],
    population: string,
    region: string
}

async function getCountries(): Promise<Array<ICountry>> {
    const resp = await fetch("https://restcountries.com/v3.1/all");

    if (!resp.ok) {
        throw new Error("Something went wrong :(");
    }

    return resp.json();
}


export default async function Home() {
  const countries = await getCountries();
  return (
    <MainCard countries={countries}/>
  )
}
