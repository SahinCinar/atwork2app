import styles from "./MobileButtons.module.scss"

function MobileButtons() {
    return (
      <>
      <div className={styles.container}>
          <h1 className={styles.title}>Waar ben je op zoek ?</h1>
          <div className={styles.container_list}>
            <ul>
              <il className={styles.transport}><img className={styles.transportimg} src={bicycle2}></img>
              <p className={styles.transporttext}>Transport</p>
              </il>
              <il className={styles.eatdrink}><img className={styles.eatdrinkimg} src={restaurant2}></img>
              <p className={styles.eatdrinktext}>Eten en drinken</p>
              </il>
              <il className={styles.shopping}><img className={styles.shoppingimg} src={shopping2}></img>
              <p className={styles.shoppingtext}>Winkelen</p>
              </il>
              <il className={styles.green}><img className={styles.greenimg} src={leafs2}></img>
              <p className={styles.greentext}>Green</p>
              </il>
              <il className={styles.hiddengems}><img className={styles.hiddengemsimg} src={hiddengems2}></img>
              <p className={styles.hiddengemstext}>Hidden gems</p>
              </il>
            </ul>
          </div>
      </div>
      </>
    )
  }
  
  export default MobileButtons