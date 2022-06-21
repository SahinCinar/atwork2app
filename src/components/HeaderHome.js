import styles from "./HeaderHome.module.scss"
import user from "./assets/user.png"
import logo from "./assets/logo.png"
import hamburger from "./assets/list2.png"


function HeaderHome() {
    return (
        <>
      <div className={styles.container_headerhome}>
        <button className={styles.button_profile}><img alt="user" className={styles.profile} src={user}></img></button>
        <img alt="logo" className={styles.logo} src={logo}></img>
        <button className={styles.button_hamburger}><img alt="hamburger menu" className={styles.logohamburger} src={hamburger}></img></button>
      </div>
      </>
    )
  }
  
  export default HeaderHome