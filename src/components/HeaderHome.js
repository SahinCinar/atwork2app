import styles from "./HeaderHome.module.scss"

function HeaderHome() {
    return (
        <>
      <div className={styles.container_headerhome}>
        <button className={styles.button_profile}><img className={styles.profile} src={profile}></img></button>
        <img className={styles.logo_img} src={logo}></img>
        <button className={styles.button_hamburger}><img className={styles.hamburger_img} src={hamburger}></img></button>
      </div>
      </>
    )
  }
  
  export default HeaderHome