import styles from "./FilterMain.module.scss"
import cross from "./assets/cross.svg"

const FilterMain = () => {
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
        <label className={styles.label_vege}><input type="checkbox" id="vege" value="vege"/>Vegetarisch</label>
        <label className={styles.label_vega}><input type="checkbox" id="vega" value="vega"/>Veganistisch</label>
        <label className={styles.label_pasta}><input type="checkbox" id="pasta" value="pasta"/>Pasta</label>
        <label className={styles.label_pizza}><input type="checkbox" id="pizza" value="pizza"/>Pizza</label>
        <label className={styles.label_afhalen}><input type="checkbox" id="afhalen" value="afhalen"/>Afhalen</label>
        <label className={styles.label_bezorgen}><input type="checkbox" id="bezorgen" value="bezorgen"/>Bezorgen</label>
    </form>
    
    <div className={styles.container_afstand}>
        <h2 className={styles.subtitle}>Afstand</h2>
    </div>
    </div>
      </>
    );
  };
  
  export default FilterMain;