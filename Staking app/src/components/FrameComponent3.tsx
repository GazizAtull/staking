import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.transactionSuccessful}>
          transaction successful
        </div>
      </button>
      <div className={styles.frameWrapper}>
        <button className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.transactionSuccessful1}>
            transaction successful
          </div>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent3;
