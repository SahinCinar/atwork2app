import styles from "./GreenGuideLabel.module.scss"

const GreenGuideLabel = () => {
    return (
      <>
    <div className={styles.container_greenguidelabel}>
        <h1 className={styles.title}>Green Guide Label</h1>
        <div className={styles.container_text}>
            <p className={styles.text}>
            Green Guide is uw eco gids door Gent!
            Doormiddel van het gebruiken van deze app
            kunt u uzelf navigeren door de groene stad en
            de meest duurzame en milieubewuwte plek
            </p>
            <p className={styles.text2}>
            ken vinden.
            Of u Gent al kent of juist nog niet, de guide is
            hier om u up-to-date te houden met alle
            nieuwe eco-spots in deze groene stad.
            Doormiddel van de Green Guide label! Wij, de
            Green Guide hebben een aantal vereisten dat
            een eco-spot moet hebben om in onze guide
            kunnen staan,
            </p>
            <p className={styles.text3}>
            - Milieu bewust
            - Zo min mogelijk afval
            - Biologisch product
            - Verminderen van bleesgebruik
            - Seizoensgebonden
            - Lokaal in Gent
            - Energiezuinig
            - Afval scheiden
            - Waterbesparend
            </p>
            <p className={styles.text4}>
            Hierdoor weet u zeker dat de restaurants en
            winkels die u bezoekt groen zijn. U kunt deze
            eco-spots herkennen aan het label dat zij in
            hun raam hebben hangen
            </p>
        </div>
    </div>
      </>
    );
  };
  
  export default GreenGuideLabel;