import styles from "./Stappen.module.scss"

const Stappen = () => {
    return (
      <>
      <div className={styles.container_stappen}>
       <h1 className={styles.aantalstappen}>6948</h1>
       <span className={styles.text}>stappen</span>
       <p className={styles.punten}>3474 punten</p>
      </div>
      <div className={styles.aan_uit}>
        <img className={styles.hartje_img}></img>
        <button className={styles.aan_uit_btn}></button>
      </div>
      </>
    );
  };
  
  export default Stappen;