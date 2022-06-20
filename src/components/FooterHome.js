import styles from "./FooterHome.module.scss"

function FooterHome() {
    return (
        <>
      <div className={styles.container_footerhome}>
        <a className={styles.link_facebook}><img className={styles.link_facebook_img}></img></a>
        <a className={styles.link_instagram}><img className={styles.link_instagram_img}></img></a>
      </div>
      </>
    )
  }
  
  export default FooterHome