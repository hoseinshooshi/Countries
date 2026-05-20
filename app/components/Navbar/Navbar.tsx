import { NavLink } from "react-router"
import styles from "./Navbar.module.css"
import type { SelectedPage } from "~/shared/types"
type Props = {   
  topOfPage: boolean; 
  selectedPage: SelectedPage;
  setSelectedPage: (value:SelectedPage) => void;}

const Navbar = ({selectedPage, setSelectedPage, topOfPage}: Props) => {
  const navbarBG = topOfPage ? styles.secondery_Container : styles.not_Top_Of_The_Page;
  return (
    <nav className={styles.navbar}>
        <div className={styles.main_Container}>
            <div className={navbarBG}>
                <div className={styles.logo_Container}>
                    <NavLink to="/">
                        <span className={styles.first_Span}>Choose</span><span className={styles.second_Span}>Where</span>
                    </NavLink>
                </div>
                <div className={styles.links_Container} >
                    <NavLink to="/AboutUs" style={({ isActive }) => ({
                        color:isActive?"rgb(59, 108, 33)":"" , textDecoration:isActive?"underline":"", textDecorationColor:isActive?"rgb(59, 108, 33)":""
                        })}>
                        <div className={styles.links}>ABOUT US</div>
                    </NavLink>
                    <NavLink to="/Countries" style={({ isActive }) => ({
                        color:isActive?"rgb(59, 108, 33)":"" , textDecoration:isActive?"underline":"", textDecorationColor:isActive?"rgb(59, 108, 33)":""
                        })}>
                        <div className={styles.links}>COUNTRIES</div>
                    </NavLink>
                    <NavLink to="/" style={({ isActive }) => ({
                        color:isActive?"rgb(59, 108, 33)":"" , textDecoration:isActive?"underline":"", textDecorationColor:isActive?"rgb(59, 108, 33)":""
                        })}>
                        <div className={styles.links}>HOME</div>
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar