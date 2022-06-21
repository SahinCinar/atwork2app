import styles from "./MobileButtons.module.scss"
import bicycle2 from "./assets/bicycle2.png"
import restaurant2 from "./assets/restaurant2.png"
import shopping2 from "./assets/shopping2.png"
import leaf2 from "./assets/leaf2.png"
import placeholder2 from "./assets/placeholder2.png"

const MobileButtons = () =>{
    return (
      <>
      <div className={styles.container}>
          <h1 className={styles.title}>Waar ben je op zoek ?</h1>
          <div className={styles.container_list}>
            <ul>
              <il className={styles.transport}><img className={styles.transportimg} src={bicycle2} alt="bicycle" ></img>
              <p className={styles.transporttext}>Transport</p>
              </il>
              <il className={styles.eatdrink}><img className={styles.eatdrinkimg} src={restaurant2} alt="restaurant" ></img>
              <p className={styles.eatdrinktext}>Eten en drinken</p>
              </il>
              <il className={styles.shopping}><img className={styles.shoppingimg} src={shopping2} alt="shopping" ></img>
              <p className={styles.shoppingtext}>Winkelen</p>
              </il>
              <il className={styles.green}><img className={styles.greenimg} src={leaf2} alt="logo" ></img>
              <p className={styles.greentext}>Green</p>
              </il>
              <il className={styles.hiddengems}><img className={styles.hiddengemsimg} src={placeholder2} alt="placeholder" ></img>
              <p className={styles.hiddengemstext}>Hidden gems</p>
              </il>
            </ul>
          </div>
      </div>
      </>
    )
  }
  export default MobileButtons