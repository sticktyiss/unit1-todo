import { useState } from "react";

const ListItem = (props) => {
  const [editing, setEditing] = useState(false);
  const [itemVal, setItemVal] = useState(props.item)

  const handleEdit = () => {
    props.editItem(props.index, itemVal)
    setEditing(false)
  }

  return (
    <div>
      {editing === false ? (<div>
        <p>{props.item}</p>
        <button onClick={() => props.removeItemFromList(props.index)}>
        Remove
        </button>
        <button onClick={() => setEditing(true)}>Edit</button>
      </div>) : (<div>
        <input value={itemVal} onChange={e => setItemVal(e.target.value)} />
        <button onClick={() => handleEdit()} >Save Change</button>
      </div>)}
    </div>
  );
};

export default ListItem;
