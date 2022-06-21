import styles from "./SideWebsite.module.scss"
import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"
import logo from "./assets/logo.png"

const SideWebsite = () => {
    return (
      <>
      <div className={styles.container_side}>
       <img className={styles.logo} src={logo} alt="logo"></img>
       <ul>
        <il className={styles.algemeen}><a href="#">Algemene Info</a></il>
        <il className={styles.foto}><a href="#">Foto's</a></il>
        <il className={styles.duurzaamheid}><a href="#">Duurzaamheid</a></il>
        <il className={styles.extra}><a href="#">Extra</a></il>
       </ul>
        <div className={styles.social}>
            <a href="#"><img src={facebook} className={styles.face}></img></a>
            <a href="#"><img src={instagram} className={styles.insta}></img></a>
            <p className={styles.text}>Green Guide</p>
        </div>
      </div>
      </>
    );
  };
  
  export default SideWebsite;