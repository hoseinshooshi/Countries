import React from 'react'
import type { Route } from './+types/Country'
import styles from "./Country.module.css"
import { Link } from 'react-router';

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs){
  const countryName = params.CountryName;
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  const data = await res.json();
  return data;
}
export function meta({loaderData}: Route.MetaArgs) {
  const country = {
    name: loaderData[0].name.common || "N/A"}
  return [
    { title: `${country.name}-Where?` },
    { name: "description", content: `Learn about ${country.name}` },
  ];
}

const Country = ({ loaderData }: Route.ComponentProps) => {
  const country = {
    name: loaderData[0].name.common || "N/A", 
    officalName: loaderData[0].name.official || "N/A", 
    region: loaderData[0].region || "N/A", 
    capital: loaderData[0].capital || "N/A", 
    subregion: loaderData[0].subregion || "N/A", 
    map: loaderData[0].maps.googleMaps || "N/A", 
    flag: loaderData[0].flags.png || "N/A", 
    coatOfArm: loaderData[0].coatOfArms.png || "N/A" 
  }
  console.log(country)
  return (
    <div className={styles.country_main_Container}>
      <div className={styles.main_Wrapper}>
        <div className={styles.Upper_Part}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <button>
            <Link to="../Countries">Back To Countries Page</Link>
          </button>
        </div>
        <div className={styles.country_Name}>
          <div>{country.name}</div>
        </div>
          <div className={styles.upper_img}>
            <div className={styles.country_flag}>
              <img src={country.flag} alt="alt" />
              <div>FLAG</div>
            </div>
            <div className={styles.coatOfArm}>
              <img src={country.coatOfArm} alt="" />
              <div>COAT OF ARMS</div>
            </div>
          </div>
          <div>
            <div className={styles.meta_ContainerP}>
              <div className={styles.text_Container}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <div>
                  <span>Official name: </span> 
                  {country.officalName}
                </div>
              </div>
              <div className={styles.text_Container}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                </svg>

                <div>
                  <span>Region: </span>
                  {country.region}
                </div>
              </div>
              <div className={styles.text_Container}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                </svg>

                <div>
                <span>Sub-Region: </span>
                {country.subregion}
                </div>
              </div>
              <div className={styles.text_Container}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>

                <div>
                  <span>Capital: </span>
                  {country.capital}
                </div>
              </div>
              <div className={styles.map_Container}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                <div>
                  <div><span>Map: </span>View On <a href={country.map} >Google Maps</a></div>
                </div>
              </div>
            </div>
              
          </div>
        </div>
    </div>
  )
}

export default Country