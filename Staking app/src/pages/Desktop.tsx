import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.desktop}>
      <FrameComponent />
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.toCompleteThe}>
          To complete the transaction, please send only the TRC20 address. Make
          sure you are using the correct format, as errors can result in loss of
          funds. TRC20 addresses start with the letter T and contain 34
          characters. Sending to the wrong address may be irreversible. If you
          have any questions, please contact our support team.
        </div>
        <FrameComponent2
          propFlex="unset"
          propPosition="absolute"
          propTop="264px"
          propLeft="63px"
          propWidth="290px"
        />
        <div className={styles.buttonParent}>
          <img
            className={styles.buttonIcon}
            loading="lazy"
            alt=""
            src="/button-1.svg"
            onClick={onButtonIconClick}
          />
          <img
            className={styles.unknownRemovebgPreview1Icon}
            loading="lazy"
            alt=""
            src="/svg@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Desktop;
