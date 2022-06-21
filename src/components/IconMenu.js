import styles from "./IconMenu.module.scss"

const IconMenu = () => {
    return (
      <>
    <div className={styles.container_cross}>
        <img className={styles.cross_img} src={cross}></img>
    </div>
    <div className={styles.container_icons}>
        <div className={styles.home_icon}>
        <button className={styles.homebtn}><img className={styles.home_img} src={icon}></img>  </button>  
        </div>        
        <div className={styles.map_icon}>
        <button className={styles.mapbtn}><img className={styles.map_img} src={icon}></img>  </button>  
        </div>
        <div className={styles.trophy_icon}>
        <button className={styles.trophybtn}><img className={styles.trophy_img} src={icon}></img>  </button>  
        </div> 
        <div className={styles.hamburger_icon}>
        <button className={styles.hamburgerbtn}><img className={styles.hamburger_img} src={icon}></img>  </button>  
        </div> 
    </div>
    <div className={styles.container_i}>
        <a className={styles.i_link}><img className={styles.i_img}></img></a>
    </div>
      </>
    );
  };
  
  export default IconMenu;