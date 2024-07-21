import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./NEWBRIEF.module.css";

const NEWBRIEF: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAddTextClick = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  return (
    <div className={styles.newBrief}>
      <section className={styles.inspirationContent}>
        <FrameComponent1
          pngTransparentTetherUnite="/pngtransparenttetherunitedstatesdollarcryptocurrencyfiatmoneymarketcapitalizationcoinanglelogoexchangeremovebgpreview-1--svg@2x.png"
          onRectangleClick={onAddTextClick}
        />
      </section>
      <section className={styles.separator} />
    </div>
  );
};

export default NEWBRIEF;
