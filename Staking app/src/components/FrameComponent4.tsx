import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <FrameComponent2 />
    </div>
  );
};

export default FrameComponent4;
