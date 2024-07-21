import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import BottomFooter from "../components/BottomFooter";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <main className={styles.frameParent}>
        <FrameComponent3 />
        <BottomFooter />
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.transactionSuccessful}>
            transaction successful
          </div>
        </button>
      </main>
    </div>
  );
};

export default Login;
