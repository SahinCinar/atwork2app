import styles from "./FormWebsite.module.scss"
import facebook from "./assets/facebook.png"

const FormWebsite = () =>{
    return (
        <>
      <div className={styles.container_form}>
        <h1 className={styles.title}>Algemene info</h1>
        <form>
            <input className={styles.contactachter} value={contactachter} placeholder="Naam Contactpersoon" name="last"></input>
            <input className={styles.contactvoor} value={contactvoor} placeholder="Naam Contactpersoon" name="firstName"></input>
            <input className={styles.company} value={company} placeholder="Naam bedrijf" name="bedrijf"></input>
            <input className={styles.year} value={year} placeholder="jaar van opstart" name="jaar"><img className={styles.down}></img></input>
            <input className={styles.mail} value={mail} placeholder="E-mailadres" name="mail"></input>
            <input className={styles.tel} value={tel} placeholder="tel" name="tel"></input>
            <input className={styles.btw} value={btw} placeholder="btw" name="btw"></input>
            <input className={styles.adres} value={adres} placeholder="adress" name="adres"></input>
            <input className={styles.categorie} value={categorie} placeholder="categorie" name="categorie"></input>
            <input className={styles.korte} value={korte} placeholder="korte" name="korte"></input>
            <p className={styles.opening}>Openingsuren:</p>
            <ul>
                <li className={styles.maandag}>van<button className={styles.van}>00:00</button>tot<button className={styles.tot}>00:00</button><p>Open</p></li>
                <li className={styles.dinsdag}>van<button  className={styles.van}>00:00</button>tot<button className={styles.tot}>00:00</button><p>Open</p></li>
                <li className={styles.woensdag}>van<button className={styles.van}>00:00</button>tot<button className={styles.tot}>00:00</button><p>Open</p></li>
                <li className={styles.donderdag}>van<button className={styles.van}>00:00</button>tot<button className={styles.tot}>00:00</button><p>Open</p></li>
                <li className={styles.vrijdag}>van<button className={styles.van}>00:00</button>tot<button className={styles.tot}>00:00</button><p>Open</p></li>
                <li className={styles.zaterdag}>van<button className={styles.van}>00:00</button>tot<button className={styles.tot}>00:00</button><p>Open</p></li>
                <li className={styles.zondag}>van<button className={styles.van}>00:00</button>tot<button className={styles.tot}>00:00</button><p>Open</p></li>
            </ul>
            <input className={styles.opslaan} type="submit">Opslaan</input>
        </form>
      </div>
      </>
    )
  }
  
  export default FormWebsite