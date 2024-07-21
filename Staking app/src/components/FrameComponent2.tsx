import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAmountInputBorderClick = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  return (
    <section className={[styles.langsInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.buttonIcon}
          loading="lazy"
          alt=""
          src="/button.svg"
          onClick={onButtonIconClick}
        />
        <div className={styles.frameWrapper}>
          <div className={styles.amountParent}>
            <a className={styles.amount}>amount</a>
            <div className={styles.amountInputContainer}>
              <button className={styles.amountInputBorderParent}>
                <div
                  className={styles.amountInputBorder}
                  onClick={onAmountInputBorderClick}
                />
                <div className={styles.sendButtonContainer}>
                  <div className={styles.send}>send</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
