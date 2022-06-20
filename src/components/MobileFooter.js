import styles from "./MobileFooter.module.scss"

const MobileFooter = () => {
    return (
      <>
    <div className={styles.container_mobilefooter}>
    <div className={styles.user}>
          <a><img className={styles.user_img} src={user} alt="user"/></a>
        </div>
    <div className={styles.home}>
          <a><img className={styles.home_img} src={home2} alt="home"/></a>
        </div>
    <div className={styles.map}>
          <a><img className={styles.map_img} src={map2} alt="map"/></a>
        </div>
    <div className={styles.trophy}>
          <a><img className={styles.trophy_img} src={trophy2} alt="trophy"/></a>
        </div>
    <div className={styles.list}>
          <a><img className={styles.list_img} src={list2} alt="list"/></a>
        </div>
    </div>
      </>
    );
  };
  
  export default MobileFooter;