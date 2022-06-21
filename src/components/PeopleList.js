import styles from "./PeopleList.module.scss"
import restaurant2 from "./assets/restaurant2.png"
import shopping2 from "./assets/shopping2.png"
import next from "./assets/next.png"
const PeopleList = () => {
    return (
      <>
      <div className={styles.container}>
    <div className={styles.container_anne}>
        <img className={styles.anne_img} src={shopping2} alt="shopping2"/>
        <p className={styles.text}>Anne B</p>
        <span className={styles.textspan}>20</span>
        <button className={styles.next} type="submit">
        <img className={styles.next_img} src={next} alt="next"/>
        </button>
    </div>
    <div className={styles.container_ayuno}>
        <img className={styles.ayuno_img} src={restaurant2} alt="restaurant"/>
        <p className={styles.text}>Ayuno</p>
        <span className={styles.textspan}>25</span>
        <button className={styles.next} type="submit">
        <img className={styles.next_img} src={next} alt="next"/>
        </button>
    </div>
    <div className={styles.container_slegte}>
        <img className={styles.slegte_img} src={shopping2} alt="shopping2"/>
        <p className={styles.text}>De Slegte</p>
        <span className={styles.textspan}>10</span>
        <button className={styles.next} type="submit">
        <img className={styles.next_img} src={next} alt="next"/>
        </button>
    </div>
    </div>
      </>
    );
  };
  
  export default PeopleList;