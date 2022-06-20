import styles from "./MapList.module.scss"
import restaurant2 from "../icons/restaurant2.png";
import list2 from "../icons/list2.png";

const MapList = () => {
    return (
      <>
    <div className={styles.eatdrinkmap}>
        <img src={restaurant2} alt="restaurant"/>
        <p className={styles.text}>
        Eten en drinken
        </p>
        <button className={styles.hamburger} type="submit">
        <img src={list2} alt="hamburger"/>
        </button>
    </div>
    <div className={styles.greenmap}>
        <img src={green} alt="green"/>
        <p className={styles.text}>
        Groen
        </p>
        <button className={styles.hamburger} type="submit">
        <img src={list2} alt="hamburger"/>
        </button>
    </div>
    <div className={styles.transportmap}>
        <img src={green} alt="transport"/>
        <p className={styles.text}>
        Transport
        </p>
        <button className={styles.hamburger} type="submit">
        <img src={list2} alt="hamburger"/>
        </button>
    </div>
    <div className={styles.storemap}>
        <img src={green} alt="store"/>
        <p className={styles.text}>
        Winkelen
        </p>
        <button className={styles.hamburger} type="submit">
        <img src={list2} alt="hamburger"/>
        </button>
    </div>
    <div className={styles.map}>
        <img src={green} alt="map"/>
        <p className={styles.text}>
        Kaart
        </p>
        <button className={styles.hamburger} type="submit">
        <img src={list2} alt="hamburger"/>
        </button>
    </div>
      </>
    );
  };
  
  export default MapList;