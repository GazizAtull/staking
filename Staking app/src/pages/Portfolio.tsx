import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./Portfolio.module.css";

const Portfolio: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHhButtonClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onRectangle6ButtonClick = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onRectangle8ButtonClick = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  return (
    <div className={styles.portfolio}>
      <FrameComponent onHhButtonClick={onHhButtonClick} />
      <section className={styles.portfolioInner}>
        <div className={styles.amountInputFieldsParent}>
          <div className={styles.amountInputFields}>
            <div className={styles.amountInputFieldsChild} />
            <div className={styles.amountInputs}>
              <div className={styles.amount}>amount</div>
            </div>
            <div className={styles.addButtonsRow}>
              <div className={styles.addButtonPair}>
                <div
                  className={styles.rectangle6Button}
                  onClick={onRectangle6ButtonClick}
                />
                <div className={styles.addButtonWrapper}>
                  <div className={styles.addButton}>add</div>
                </div>
              </div>
            </div>
            <img
              className={styles.pngTransparentTetherUnitedIcon}
              loading="lazy"
              alt=""
              src="/pngtransparenttetherunitedstatesdollarcryptocurrencyfiatmoneymarketcapitalizationcoinanglelogoexchangeremovebgpreview-1--svg@2x.png"
            />
          </div>
          <div className={styles.amountInputFields1}>
            <div className={styles.amountInputFieldsItem} />
            <div className={styles.amount1}>amount</div>
            <div className={styles.amountInputFieldsInner}>
              <div className={styles.rectangle7ButtonParent}>
                <div className={styles.rectangle7Button} />
                <div className={styles.addButton1}>add</div>
              </div>
            </div>
          </div>
          <div className={styles.amountInputFields2}>
            <div className={styles.rectangleDiv} />
            <div className={styles.amount2}>amount</div>
            <div className={styles.rectangle8ButtonParent}>
              <div
                className={styles.rectangle8Button}
                onClick={onRectangle8ButtonClick}
              />
              <div className={styles.addButtonContainer}>
                <div className={styles.addButton2}>add</div>
              </div>
            </div>
            <img
              className={styles.svgIcon}
              loading="lazy"
              alt=""
              src="/svg@2x.png"
            />
          </div>
          <div className={styles.amountInputFields3}>
            <div className={styles.amountInputFieldsChild1} />
            <div className={styles.amount3}>amount</div>
            <div className={styles.frameDiv}>
              <div className={styles.rectangle9ButtonParent}>
                <div className={styles.rectangle9Button} />
                <div className={styles.addButton3}>add</div>
              </div>
            </div>
            <img
              className={styles.svgIcon1}
              loading="lazy"
              alt=""
              src="/svg-1@2x.png"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
