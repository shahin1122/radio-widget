import React, { useState } from "react";
// Styles
import styles from "./radioWidget.module.css";
// Components
import RadioDetail from "./radioDetail";
// Elements
import arrow from "../images/back-arrow.png";
import swit from "../images/switch.png";

//Service request data
import getRadioService from "./hooks/getRadioService";

export const RadioWidget = () => {
  //Set radio playing
  const [play, setPlay] = useState("");

  //function to set the radio playing
  const handleClick = (e: string) => {
    console.log(e);
    setPlay(e);
  };

  // Dinamic accordion function detail.
  const details = document.querySelectorAll("details");

  // Add the onclick listeners.
  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      // Close all the details that are not targetDetail.
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });

  //Call to data service
  const { result, loading, error } = getRadioService();
  // Verify state of the data from fetch
   if (loading) return <p>Loading...</p>;
   if (error) return <p>There was an error loading your data!</p>;
  

  //Radio Widget Render
  return (
    <div className={styles.radio}>
      <div className={styles.radio__header}>
        <button className={styles.btn}>
          <img
            className={styles.radio__header__icon__arrow}
            src={arrow}
            alt="arrow"
          />
        </button>
        <div className={styles.radio__header__tittle}>
          <div>STATIONS</div>
        </div>
        <button className={styles.btn}>
          <img
            className={styles.radio__header__icon__switch}
            src={swit}
            alt="swit"
          />
        </button>
      </div>

      {/* radio list with render of data and component radio detail  */}
      <div className={styles.radio__list} title="Radio">
        {result &&
          result.map((radio) => {
            return (
              <details key={radio.id} >
                <summary
                  className={styles.radio__list__items}
                  onClick={() => handleClick(`${radio.radioName}`)}
                >
                  <div> {radio.radioName} </div>
                  <div className={styles.radio__list__items__freq}>
                    {radio.radioFreq}
                  </div>
                </summary>
                <RadioDetail coverUrl={radio.coverUrl} />
              </details>
            );
          })}
      </div>

      <div className={styles.radio__footer}>
        <div className={styles.radio__footer__display}>CURRENTLY PLAYING</div>
        <div className={styles.radio__footer__paying}>{play}</div>
      </div>
    </div>
  );
};

export default RadioWidget;
