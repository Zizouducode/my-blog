import Baseline from "./Baseline";
import Title from "./Title";

const Header = () => {
  return (
    <div className="header">
      <Title title={"My Blog"} />
      <Baseline baseline={"An Awesome basline"} />
    </div>
  );
};

export default Header;
