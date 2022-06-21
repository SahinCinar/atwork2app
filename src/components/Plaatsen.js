import styles from "./Plaatsen.module.scss"
import shopping2 from "./assets/shopping2.png"
import restaurant2 from "./assets/restaurant2.png"

const Plaatsen = () => {
    return (
      <>
      <div className={styles.container_plaatsen}>
        <h1 className={styles.title}>Plaatsen</h1>
        <p className={styles.a_z}>A-Z</p>
      
      <div className={styles.plaatsen}>
        <div className={styles.container_anne}>
        <img className={styles.anne_img} src={shopping2} alt="shopping2"/>
        <p className={styles.text}>Anne B</p>
        </div>
        <div className={styles.container_appelier}>
        <img className={styles.appelier_img} src={restaurant2} alt="restaurant"/>
        <p className={styles.text}>Appelier</p>
        </div>
        <div className={styles.container_ayuno}>
        <img className={styles.ayuno_img} src={restaurant2} alt="restaurant"/>
        <p className={styles.text}>Ayuno</p>
        </div>
        <div className={styles.container_beomarkt}>
        <img className={styles.beomarkt_img} src={shopping2} alt="shopping2"/>
        <p className={styles.text}>Beo-Markt</p>
        </div>
        <div className={styles.container_bioplanet}>
        <img className={styles.bioplanet_img} src={shopping2} alt="shopping2"/>
        <p className={styles.text}>Bioplanet</p>
        </div>
        <div className={styles.container_bioshop}>
        <img className={styles.bioshop_img} src={shopping2} alt="shopping2"/>
        <p className={styles.text}>Bioshop Pompernei</p>
        </div>
        <div className={styles.container_centrum}>
        <img className={styles.centrum_img} src={shopping2} alt="shopping2"/>
        <p className={styles.text}>Centrumplein Ledeberg</p>
        </div>
        <div className={styles.container_charles}>
        <img className={styles.charles_img} src={shopping2} alt="shopping2"/>
        <p className={styles.text}>Charles l’Espeeplein</p>
        </div>
        <div className={styles.container_friet}>
        <img className={styles.friet_img} src={restaurant2} alt="restaurant"/>
        <p className={styles.text}>De Frietketel</p>
        </div>
        <div className={styles.container_slegte}>
        <img className={styles.slegte_img} src={restaurant2} alt="restaurant"/>
        <p className={styles.text}>De Slegte</p>
        </div>
        <div className={styles.container_walrus}>
        <img className={styles.walrus_img} src={restaurant2} alt="restaurant"/>
        <p className={styles.text}>De Walrus</p>
        </div>
      </div>
      </div>
      </>
    );
  };
  
  export default Plaatsen;