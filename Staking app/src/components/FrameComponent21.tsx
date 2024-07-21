import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent21.module.css";

export type FrameComponent2Type = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  propFlex,
  propPosition,
  propTop,
  propLeft,
  propWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propFlex, propPosition, propTop, propLeft, propWidth]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.trc20Adress}>TRC20 adress</div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.add}>add</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
