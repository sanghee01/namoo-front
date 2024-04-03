import Router from "./Router";
import GlobalStyles from "./styles/GlobalStyles";
import { RecoilRoot } from "recoil";
import Heatmap from "./components/Heatmap";


function App() {
  return (
    <>
      <RecoilRoot>
        <Router />
        <GlobalStyles />
      </RecoilRoot>
    </>
  );
}

export default App;
