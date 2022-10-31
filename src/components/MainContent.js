import Item from "./Item";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="item">
        <Item
          itemTitle={"TITLE 1"}
          itemSubtitle={"Subtitle 1"}
          itemDescription={
            "Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
          }
        />
      </div>
      <div className="item">
        <Item
          itemTitle={"TITLE 2"}
          itemSubtitle={"Subtitle 2"}
          itemDescription={
            "Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
          }
        />
      </div>
    </div>
  );
};

export default MainContent;
