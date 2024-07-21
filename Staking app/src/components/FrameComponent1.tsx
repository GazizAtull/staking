import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  pngTransparentTetherUnite?: string;

  /** Action props */
  onRectangleClick?: () => void;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  pngTransparentTetherUnite,
  onRectangleClick,
}) => {
  const navigate = useNavigate();

  const onRectangleClick1 = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  const onNotYetTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.inspirationHeadingParent, className].join(" ")}>
      <div className={styles.inspirationHeading}>
        <div className={styles.page}>
          <div className={styles.pageChild} />
          <img
            className={styles.buttonIcon}
            loading="lazy"
            alt=""
            src="/hh--button.svg"
          />
          <div className={styles.buttonItem}>
            <div className={styles.totalParent}>
              <a className={styles.total}>Total :</a>
              <div className={styles.amountWrapper}>
                <a className={styles.amount}>amount</a>
              </div>
            </div>
          </div>
          <div className={styles.expand}>
            <div className={styles.frameParent}>
              <div className={styles.canBeDeducedWrapper}>
                <div className={styles.canBeDeduced}>can be deduced :</div>
              </div>
              <a className={styles.amount1}>amount</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.optionsChild} />
        <div className={styles.pngTransparentTetherUnitedWrapper}>
          <img
            className={styles.pngTransparentTetherUnitedIcon}
            loading="lazy"
            alt=""
            src={pngTransparentTetherUnite}
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h2 className={styles.amount2}>amount</h2>
          </div>
          <div className={styles.examples}>
            <div className={styles.addPaymentContent}>
              <div className={styles.options1}>
                <div
                  className={styles.optionsItem}
                  onClick={onRectangleClick1}
                />
                <div className={styles.content}>
                  <div className={styles.add} onClick={onRectangleClick}>
                    add
                  </div>
                </div>
              </div>
              <div className={styles.inspirationContainer}>
                <div className={styles.inspirationContainerChild} />
                <div className={styles.notYet} onClick={onNotYetTextClick}>
                  not yet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
