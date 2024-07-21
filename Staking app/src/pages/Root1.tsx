import { FunctionComponent } from "react";
import Instructions from "../components/Instructions";
import styles from "./Root1.module.css";

const Root1: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <section className={styles.transactionSteps}>
        <div className={styles.stepOne}>
          <div className={styles.stepOneChild} />
          <img
            className={styles.buttonIcon}
            loading="lazy"
            alt=""
            src="/hh--button.svg"
          />
          <div className={styles.amountWrapper}>
            <a className={styles.amount}>amount</a>
          </div>
        </div>
      </section>
      <Instructions />
    </div>
  );
};

export default Root1;
