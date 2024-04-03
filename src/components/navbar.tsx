import * as React from "react";
import styles from "./navbar.module.css";
import { MenuItems } from "@/assets/Props";
import Router from "next/router";
import { BsHeartFill } from "react-icons/bs";

const Navbar = () => {

    const [activeLink, setActiveLink] = React.useState<string>("/");

    React.useEffect(() => {
        console.log(Router.pathname);
        setActiveLink(Router.pathname);
    }, [Router.pathname]);
  return (
    <nav className={styles.navbar}>
        <a className={styles.navItemLink} onClick={() => Router.push("/")}>
            <img src={"/images/logo.png"} alt="logo" className={styles.logo}/>
        </a>
        <ul className={styles.navItemsContainer}>
            {
                MenuItems.map((item, index) => {
                    return (
                        <li key={index} className={`${styles.navItem} ${activeLink === item.url ? styles.activeNavItem : ""}`}>
                            <a 
                                onClick={() => Router.push(item.url)} 
                                className={`${styles.navItemLink}`}>
                                {item.title}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
        <div className={styles.navBtnContainer}>
            <button 
                onClick={() => Router.push("/csr")}
                className={`${styles.navBtn} ${styles.csrBtn}`}>
                    CSR</button>
            <button 
                onClick={() => Router.push("/donate")}
                className={`${styles.navBtn} ${styles.donateBtn}`}>
                    Donate <BsHeartFill className={styles.heartIcon}/> </button>
        </div>
    </nav>
        
  );
}


export default Navbar;