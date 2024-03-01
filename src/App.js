import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "../src/utils/store/appStore";

function App() {
  return (
    <Provider store={appStore}>
    <div className="">
      <Body />
    </div>
    </Provider>
  );
}

export default App;
