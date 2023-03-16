import { getCookie } from "../utils/FuncionCookie";
import LoginView from "./LoginView";
import LayoutView from "./LayoutView";
const HomeView = () => {
  const userCookie = getCookie("session");

  if (userCookie) {
    return <LayoutView />;
  }
  return <LoginView />;
};

export default HomeView;
