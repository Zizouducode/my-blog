import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import NavigationMenu from "./components/NavigationMenu";
import SideContent from "./components/SideContent";

const App = () => {
  return (
    <body>
      <div className="container">
        <Header />
        <NavigationMenu />
        <div className="content">
          <MainContent />
          <SideContent />
        </div>
      </div>
    </body>
  );
};

export default App;
