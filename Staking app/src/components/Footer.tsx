import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSvgIconClick = useCallback(() => {
    navigate("/frame-8");
  }, [navigate]);

  return (
    <section className={[styles.portfolioInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.svgIcon}
          loading="lazy"
          alt=""
          src="/svg-2@2x.png"
        />
        <div className={styles.svgContainer}>
          <img
            className={styles.svgIcon1}
            loading="lazy"
            alt=""
            src="/svg-2@2x.png"
            onClick={onSvgIconClick}
          />
          <img className={styles.unionIcon} alt="" src="/union.svg" />
          <img
            className={styles.svgIcon2}
            loading="lazy"
            alt=""
            src="/svg-4@2x.png"
          />
        </div>
        <img
          className={styles.svgIcon3}
          loading="lazy"
          alt=""
          src="/svg-5@2x.png"
        />
      </div>
    </section>
  );
};

export default Footer;
