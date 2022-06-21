import styles from "./TweeButtons.module.scss"

const TweeButtons = () => {
    return (
      <>
      <div className={styles.container_buttons}>
      <button className={styles.family_btn}><img className={styles.family_img} scr={}></img></button>
      <button className={styles.group_btn}><img className={styles.group_img} scr={}></img></button>
      </div>
      </>
    );
  };
  
  export default TweeButtons;