import styles from "./Cards.module.scss"
import fruit from "../icons/fruit.jpeg";
import mensen from "../icons/mensen.jpeg";
import friet from "../friet.jpeg";
import kleren from "../icons/kleren.jpeg";

const Cards = () => {
    return (
      <>
      <div className={styles.container_cards}>
    <div className={styles.card_lush}>
        <button className={styles.btnlush} type="submit">
          Lush
          <span>20%</span>
          <img src={fruit} alt="fruit"/>
        </button>
    </div>
    <div className={styles.card_cafe}>
        <button className={styles.btncafe} type="submit">
          Vooruit
          Cafe
          <span>10%</span>
          <img src={mensen} alt="mensen"/>
        </button>
    </div>
    <div className={styles.card_friet}>
        <button className={styles.btnfriet} type="submit">
          Des
          Frietketel
          <span>50%</span>
          <img src={friet} alt="friet"/>
        </button>
    </div>
    <div className={styles.card_yak}>
        <button className={styles.btnyak} type="submit">
          Yak en Yeti
          <span>20%</span>
          <img src={kleren} alt="kleren"/>
        </button>
    </div>
  </div>
      </>
    );
  };
  
  export default Cards;
  