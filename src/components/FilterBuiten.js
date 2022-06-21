import styles from "./FilterBuiten.module.scss"
import cross from "./assets/cross.svg"

const FilterBuiten = () => {
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
        <label className={styles.Parken}><input type="checkbox" id="twee" value="twee"/>Parken</label>
        <label className={styles.Zwemmen}><input type="checkbox" id="kleding" value="kleding"/>Zwemmen</label>
        <label className={styles.Picknicken}><input type="checkbox" id="wonen" value="wonen"/>Picknicken</label>
        <label className={styles.Speeltuin}><input type="checkbox" id="allerlei" value="allerlei"/>Speeltuin</label>
    </form>
    <div className={styles.container_afstand}>
        <h2 className={styles.subtitle}>Afstand</h2>
    </div>
    </div>
      </>
    );
  };
  
  export default FilterBuiten;