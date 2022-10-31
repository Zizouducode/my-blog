import ItemDescription from "./ItemDescription";
import ItemPicture from "./ItemPicture";
import ItemSubtitle from "./ItemSubtitle";
import ItemTitle from "./ItemTitle";

const Item = (props) => {
  return (
    <>
      <ItemTitle itemTitle={props.itemTitle} />
      <ItemSubtitle itemSubtitle={props.itemSubtitle} />
      <ItemPicture />
      <ItemDescription itemDescription={props.itemDescription} />
    </>
  );
};

export default Item;
