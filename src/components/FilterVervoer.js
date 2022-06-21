import styles from "./FilterVervoer.module.scss"
import cross from "./assets/cross.svg"

const FilterVervoer = () => {
    return (
      <>
      <div className={styles.container_cross}>
        <img className={styles.cross_img} src={cross}></img>
    </div>
    <div className={styles.container}>
        <h1 className={styles.title}>Filters</h1>
    </div>
    <div className={styles.container_middel}>
    <div className={styles.buttons}>
        <button className={styles.button1}>
            <p className={styles.p1}>€</p>
        </button>
        <button className={styles.button2}>
            <p className={styles.p2}>€€</p>
        </button>
        <button className={styles.button3}>
            <p className={styles.p3}>€€€</p>
        </button>
    </div>
    <form className={styles.container_form}>
        <label className={styles.label_obv}><input type="checkbox" id="obv" value="obv"/>Openbaar vervoer</label>
        <label className={styles.label_fiets}><input type="checkbox" id="fiets" value="fiets"/>Fietsverhuur</label>
        <label className={styles.label_bus}><input type="checkbox" id="bus" value="bus"/>Bus</label>
        <label className={styles.label_tram}><input type="checkbox" id="tram" value="tram"/>Tram</label>
    </form>
    <div className={styles.container_afstand}>
        <h2 className={styles.subtitle}>Afstand</h2>
    </div>
    </div>
      </>
    );
  };
  
  export default FilterVervoer;