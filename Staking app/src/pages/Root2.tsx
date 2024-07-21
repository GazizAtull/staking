import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Root2.module.css";

const Root2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSeparatorClick = useCallback(() => {
    navigate("/frame-9");
  }, [navigate]);

  const onKisspngDigitalWalletComputeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.root}>
      <section className={styles.walletDetailsWrapper}>
        <div className={styles.walletDetails}>
          <div className={styles.walletDetailsChild} />
          <h1 className={styles.walletGrafic}>wallet grafic</h1>
        </div>
      </section>
      <section className={styles.contentBlockParent}>
        <div className={styles.contentBlock}>
          <div className={styles.innerContentParent}>
            <div className={styles.innerContent}>
              <div className={styles.contentItems}>
                <div className={styles.separator} onClick={onSeparatorClick} />
                <div className={styles.seeMore}>see more</div>
              </div>
            </div>
            <div className={styles.transactionStatus}>
              <button className={styles.statusMessages}>
                <div className={styles.statusMessagesChild} />
                <div className={styles.transactionSuccessful}>
                  transaction successful
                </div>
              </button>
              <button className={styles.statusMessages1}>
                <div className={styles.statusMessagesItem} />
                <div className={styles.transactionSuccessful1}>
                  transaction successful
                </div>
              </button>
              <div className={styles.statusContainer}>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.transactionSuccessful2}>
                    transaction successful
                  </div>
                </button>
              </div>
              <button className={styles.statusMessages2}>
                <div className={styles.statusMessagesInner} />
                <div className={styles.transactionSuccessful3}>
                  transaction successful
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameItem} />
          <div className={styles.lineWrapper}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.lineContainer}>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.imagePlaceholderParent}>
            <div className={styles.imagePlaceholder} />
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
        </div>
      </section>
    </div>
  );
};

export default Root2;
