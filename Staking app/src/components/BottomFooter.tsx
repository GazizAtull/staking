import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BottomFooter.module.css";

export type BottomFooterType = {
  className?: string;
};

const BottomFooter: FunctionComponent<BottomFooterType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <button className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.transactionSuccessful}>transaction successful</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.image} />
        <div className={styles.frameInner} />
        <div className={styles.image1} />
        <img
          className={styles.buttonIcon}
          alt=""
          src="/button-1.svg"
          onClick={onButtonIconClick}
        />
      </div>
    </button>
  );
};

export default BottomFooter;
