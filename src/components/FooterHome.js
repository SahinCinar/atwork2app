import styles from "./FooterHome.module.scss"
import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"

const FooterHome = () =>{
    return (
        <>
      <div className={styles.container_footerhome}>
        <img alt="facebook" className={styles.fb_img} src={facebook}></img>
        <img alt="instagram" className={styles.insta_img} src={instagram}></img>
      </div>
      </>
    )
  }
  
  export default FooterHome