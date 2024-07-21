import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Instructions.module.css";

export type InstructionsType = {
  className?: string;
};

const Instructions: FunctionComponent<InstructionsType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={[styles.instructions, className].join(" ")}>
      <div className={styles.instructionsChild} />
      <div className={styles.transactionDetails}>
        <div className={styles.sendInstruction}>
          <div className={styles.toCompleteThe}>
            To complete the transaction, please send only the TRC20 address.
            Make sure you are using the correct format, as errors can result in
            loss of funds. TRC20 addresses start with the letter T and contain
            34 characters. Sending to the wrong address may be irreversible. If
            you have any questions, please contact our support team.
          </div>
          <div className={styles.addressContainer}>
            <div className={styles.addressDetails}>
              <div className={styles.addressType}>
                <div className={styles.addressTypeChild} />
                <div className={styles.trc20Adress}>TRC20 adress</div>
              </div>
              <div className={styles.sendAction}>
                <button className={styles.sendWord}>
                  <div className={styles.sendWordChild} />
                  <div className={styles.send}>send</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.transactionImage}>
        <div className={styles.actionButton}>
          <img
            className={styles.buttonIcon}
            loading="lazy"
            alt=""
            src="/button-1.svg"
            onClick={onButtonIconClick}
          />
        </div>
        <img
          className={styles.pngTransparentTetherUnitedIcon}
          loading="lazy"
          alt=""
          src="/pngtransparenttetherunitedstatesdollarcryptocurrencyfiatmoneymarketcapitalizationcoinanglelogoexchangeremovebgpreview-1--svg@2x.png"
        />
      </div>
    </section>
  );
};

export default Instructions;
