import { useState } from 'react';
import type { Route } from './+types/Countries'
import { Link } from 'react-router'
import styles from "./Countries.module.css"
export async function clientLoader({
  params,
}: Route.ClientLoaderArgs){
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
  const data = await res.json();
  return data;
}
const Countries = ({ loaderData }: Route.ComponentProps) => {
  const [search, setSearch] = useState<String>("");
  const [region, setRegion] = useState<String>("");
  const filteredCountries =loaderData.filter((country:any) => {
    const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase())
    const regionSearch = !region || country.region.toLowerCase() === region.toLowerCase();

    return matchesSearch && regionSearch
  })
  const regions = ["All Regions", "Americas", "Africa", "Asia", "Europe", "Oceania"]
  return (
    <div className={styles.main_Container}>
      <div className={styles.Upper_Part}>
        <div className={styles.input_Serch}> 
          <input type="text" placeholder='Search By Name...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className={styles.select_Container}>
            {
              regions.map((region:any, key:any) => (
                <div className={styles.buttons_div}>
                  <button className={styles.region_button} value={region} onClick={region === "All Regions" ? ()=>setRegion("") : (e)=>setRegion(e.target.value)} >{region}</button>
                </div>
              ))
            }
        </div>        
      </div>
      {filteredCountries.length === 0 ? (
           <div className={styles.filter_Error}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>

              <div>
                There was No Match For You
              </div>
            </div>
      ) : (
   
      <div className={styles.Countries_Card_Container}>
        <div className={styles.cards_inner_grid_Container}>
            {filteredCountries.map((country:any,key:number) => (
              <div className={styles.inner_grid_Container}>
                <div className={styles.country_name}>
                  
                  <Link to={`${country.name.common}`}>{country.name.common}</Link>
                </div>
                <div>
                  <div>
                    <img src={country.flags.png} alt={country.flags.alt} />
                  </div>
                  <div className={styles.meta_Container}>
                    <div className={styles.text_Container}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(59, 108, 33)" className="size-2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                      <div>population: {country.population.toLocaleString()}</div>
                    </div>
                    <div className={styles.text_Container}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(59, 108, 33)" className="size-2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                      </svg>
                      <div>region: {country.region}</div>
                    </div>
                    <div className={styles.text_Container}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(59, 108, 33)" className="size-2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <div>capital: {country.capital[0]}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div> )}
    </div>
  )
}

export default Countries