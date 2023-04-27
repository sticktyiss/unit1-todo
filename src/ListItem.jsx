const ListItem = (props) => {
  return (
    <div>
      {props.item}
      <button onClick={() => props.removeItemFromList(props.index)}>
        Finished
      </button>
    </div>
  );
};

export default ListItem;
