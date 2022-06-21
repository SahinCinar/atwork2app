import styles from "./FilterShopping.module.scss"
import cross from "./assets/cross.svg"

const FilterShopping = () => {
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
        <label className={styles.label_twee}><input type="checkbox" id="twee" value="twee"/>Tweedehands</label>
        <label className={styles.label_kleding}><input type="checkbox" id="kleding" value="kleding"/>Kleding</label>
        <label className={styles.label_wonen}><input type="checkbox" id="wonen" value="wonen"/>Wonen</label>
        <label className={styles.label_allerlei}><input type="checkbox" id="allerlei" value="allerlei"/>Allerlei</label>
        <label className={styles.label_supermarkt}><input type="checkbox" id="supermarkt" value="supermarkt"/>Supermarkt</label>
    </form>
    <div className={styles.container_afstand}>
        <h2 className={styles.subtitle}>Afstand</h2>
    </div>
    </div>
      </>
    );
  };
  
  export default FilterShopping;