import React from "react";
import styles from "./footer.module.css";
import { BsHeartFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.details}>
                <div className={styles.logo}>
                    <img src={"/images/logo.png"} alt="logo" className={styles.logo}/>
                </div>
                <div className={styles.schoolDetails}>
                    <p className={styles.schoolName}>DBTR National Higher Secondary School</p>
                    <p className={styles.schoolQuote}>Virtuousness is Life</p>
                    <p className={styles.schoolEstablishment}>Established in 1901, DBTR is situated in the temple town of Mayiaduthurai.</p>
                </div>
                <div className={styles.quickLinksContainer}>
                    <p className={styles.quickLinksTitle}>QUICK LINKS</p>
                    <ul className={styles.quickLinks}>
                        <li className={styles.quickLink}>Admissions</li>
                        <li className={styles.quickLink}>Alumni association</li>
                        <li className={styles.quickLink}>Donate</li>
                        <li className={styles.quickLink}>Events</li>
                    </ul>
                </div>
                <div className={styles.contactContainer}>
                    <p className={styles.contactTitle}>CONTACT</p>
                    <div className={styles.contactDetails}>
                        <p className={styles.contactTitle}>DBTR NHSS,</p>
                        <p className={styles.contactDetail}>Mahadhana Street,</p>
                        <p className={styles.contactDetail}>Kamarajar Salai,</p>
                        <p className={styles.contactDetail}>Mayiladuthurai,</p>
                        <p className={styles.contactDetail}>Tamilnadu - 609001</p>
                    </div>
                    <div className={styles.mobile}>+91.436.422.3272</div>
                    <div className={styles.email}>contact@nationalhighschool.in</div>
                </div>
                <div className={styles.motoContainer}>
                    <div className={styles.moto}>Big or small, you can make an impact.</div>
                    <button
                        className={`${styles.donateBtn}`}>
                            Donate <BsHeartFill className={styles.heartIcon}/></button>
                </div>
            </div>
            <hr className={styles.hrSeparater}/>
            <div className={styles.rightsContainer}>
                <div className={styles.copyRightContainer}>
                    <p className={styles.copyRight}>© DBTR 2023. All rights reserved &nbsp;|&nbsp; Sitemap</p>
                    <p className={styles.designedBy}>Designed by
                        <img src={"/images/peppersquarelogo.png"} alt="logo" className={styles.peppersquareLogo}/>
                    </p>
                </div>
                <div className={styles.socialMediaContainer}>
                    <BsTwitter className={styles.socialMediaIcon} />
                    <BsLinkedin className={styles.socialMediaIcon} />
                    <BsInstagram className={styles.socialMediaIcon} />
                    <BsFacebook className={styles.socialMediaIcon} />
                    <BsYoutube className={styles.socialMediaIcon} />
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;