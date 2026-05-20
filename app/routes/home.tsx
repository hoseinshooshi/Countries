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
          <div className={styles.AboutUs_Button}>
            <div>ABOUT US</div>
            <div className={styles.svg_container}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ECECEC" id="svg" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </Link>
        <Link to="/Countries">
        <div className={styles.explore_Button}>
          <div>Explore More</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ECECEC" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        </Link>
      </div>
    </div>
  );
}
