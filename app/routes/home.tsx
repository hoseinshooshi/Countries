import type { Route } from "./+types/home";
import styles from "./Home.module.css"
import { Link } from "react-router";
import Globe from "../components/Globe/Globe";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Where?!" },
    { name: "description", content: "Where You Wanna Know About?" },
  ];
}

export default function Home() {
  return (
    <div className={styles.home_Main_Container}>
      <div>
        <Globe />
      </div>
      {/* COBE OFF WEBSITE: https://cobe.vercel.app/*/}
      {/* ELDORA UI: https://www.eldoraui.site/docs/components/cobe-globe */}
      {/* MAGIC UI: https://magicui.design/docs/components/globe */}
      <div className={styles.buttons_Container}>
        <Link to="/AboutUs">
          <button className={styles.animated_button}>
            <svg viewBox="0 0 24 24" className={styles.arr_2} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className={styles.text}>ABOUT US</span>
            <span className={styles.circle}></span>
            <svg viewBox="0 0 24 24" className={styles.arr_1} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>
        </Link>
        <Link to="/Countries">
          <button className={styles.animated_button1}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.arr_21} viewBox="0 0 24 24">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className={styles.text1}>E N T R Y</span>
            <span className={styles.circle1}></span>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.arr_11} viewBox="0 0 24 24">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>

        </Link>
      </div>
    </div>
  );
}
