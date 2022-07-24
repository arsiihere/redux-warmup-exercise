import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  const authLoginForm = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!authLoginForm && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
