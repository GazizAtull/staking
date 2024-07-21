import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent4 from "../components/FrameComponent4";
import { useNavigate } from "react-router-dom";
import styles from "./Root.module.css";

const Root: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.root}>
      <FrameComponent />
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.toCompleteTheTransactionPParent}>
          <div className={styles.toCompleteThe}>
            To complete the transaction, please send only the TRC20 address.
            Make sure you are using the correct format, as errors can result in
            loss of funds. TRC20 addresses start with the letter T and contain
            34 characters. Sending to the wrong address may be irreversible. If
            you have any questions, please contact our support team.
          </div>
          <FrameComponent4 />
        </div>
        <div className={styles.buttonParent}>
          <img
            className={styles.buttonIcon}
            loading="lazy"
            alt=""
            src="/button-1.svg"
            onClick={onButtonIconClick}
          />
          <img
            className={styles.pngTransparentTetherUnitedIcon}
            loading="lazy"
            alt=""
            src="/pngtransparenttetherunitedstatesdollarcryptocurrencyfiatmoneymarketcapitalizationcoinanglelogoexchangeremovebgpreview-1--svg@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Root;
