import Link from "./Link";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <div>
        <Link name={"Link"} />
        <Link name={"Link"} />
        <Link name={"Link"} />
      </div>
      <div>
        <Link name={"Link"} />
      </div>
    </div>
  );
};

export default NavigationMenu;
