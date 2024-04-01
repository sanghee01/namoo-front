import Router from "./Router";
import GlobalStyles from "./styles/GlobalStyles";
import { RecoilRoot } from "recoil";

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
