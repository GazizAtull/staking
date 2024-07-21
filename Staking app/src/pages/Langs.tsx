import { FunctionComponent, useCallback } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigate } from "react-router-dom";
import styles from "./Langs.module.css";

const Langs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onKisspngDigitalWalletComputeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.langs}>
      <FrameComponent2 />
      <section className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.lineWrapper}>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.imageBorderParent}>
          <div className={styles.imageBorder} />
          <img
            className={styles.kisspngDigitalWalletComputeIcon}
            loading="lazy"
            alt=""
            src="/svg-2@2x.png"
            onClick={onKisspngDigitalWalletComputeIconClick}
          />
          <img
            className={styles.imagesRemovebgPreview1Icon}
            loading="lazy"
            alt=""
            src="/svg-4@2x.png"
          />
          <img
            className={styles.rocket3807RemovebgPreview1Icon}
            loading="lazy"
            alt=""
            src="/svg-5@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Langs;
