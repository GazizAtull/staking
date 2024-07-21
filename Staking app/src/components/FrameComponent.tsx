import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;

  /** Action props */
  onHhButtonClick?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  onHhButtonClick,
}) => {
  const navigate = useNavigate();

  const onHhButtonClick1 = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <section className={[styles.portfolioInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.hhButton}
          loading="lazy"
          alt=""
          src="/hh--button.svg"
          onClick={onHhButtonClick}
        />
        <div className={styles.frameWrapper}>
          <div className={styles.totalParent}>
            <a className={styles.total}>Total :</a>
            <div className={styles.amountWrapper}>
              <a className={styles.amount}>amount</a>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.canBeDeducedWrapper}>
              <div className={styles.canBeDeduced}>can be deduced :</div>
            </div>
            <a className={styles.amount1}>amount</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
