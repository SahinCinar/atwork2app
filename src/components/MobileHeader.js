import styles from "./MobileHeader.module.scss"

const MobileHeader = () => {
    return (
      <>
    <div className={styles.container_header}>
    <button className={styles.rewards_button}>Rewards</button>
    <button className={styles.steps_button}>Steps</button>
    <button className={styles.discounts_button}>Discounts</button>
    </div>
      </>
    );
  };
  
  export default MobileHeader;