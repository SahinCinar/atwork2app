import styles from "./FilterIcons.module.scss"

const FilterIcons = () => {
    return (
      <>
      <div className={styles.container_filtericons}>
      <button className={styles.fiets_btn}><img className={styles.fiets_img} src={}></img></button>
      <button className={styles.eten_btn}><img className={styles.eten_img} src={}></img></button>
      <button className={styles.winkel_btn}><img className={styles.winkel_img} src={}></img></button>
      <button className={styles.green_btn}><img className={styles.green_img} src={}></img></button>
      </div>
      </>
    );
  };
  
  export default FilterIcons;