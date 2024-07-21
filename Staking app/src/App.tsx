import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import NEWBRIEF from "./pages/NEWBRIEF";
import WwwfrokerinByHtmltodesign from "./pages/WwwfrokerinByHtmltodesign";
import Desktop from "./pages/Desktop";
import Root2 from "./pages/Root2";
import Langs from "./pages/Langs";
import Root1 from "./pages/Root1";
import Login from "./pages/Login";
import Root from "./pages/Root";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/frame-7":
        title = "";
        metaDescription = "";
        break;
      case "/frame-8":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-5":
        title = "";
        metaDescription = "";
        break;
      case "/frame-9":
        title = "";
        metaDescription = "";
        break;
      case "/frame-4":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/frame-3" element={<NEWBRIEF />} />
      <Route path="/frame-6" element={<WwwfrokerinByHtmltodesign />} />
      <Route path="/frame-7" element={<Desktop />} />
      <Route path="/frame-8" element={<Root2 />} />
      <Route path="/frame-2" element={<Langs />} />
      <Route path="/frame-5" element={<Root1 />} />
      <Route path="/frame-9" element={<Login />} />
      <Route path="/frame-4" element={<Root />} />
    </Routes>
  );
}
export default App;
