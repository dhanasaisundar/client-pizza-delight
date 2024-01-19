import { useDispatch } from "react-redux";
import Button from "../../ui/Button/Button";
import { deleteFromCart, deleteFromDrinksCart } from "./cartSlice";

function DeleteCartItem({ id, type }) {
  const dispatch = useDispatch();
  let handlerFunction;
  function handleDelete() {
    dispatch(deleteFromCart(id));
  }

  function handleDeleteDrinks() {
    dispatch(deleteFromDrinksCart(id));
  }

  if (type === "drinks") {
    handlerFunction = handleDeleteDrinks;
  } else if (type === "pizza") {
    handlerFunction = handleDelete;
  }

  return (
    <Button type="small" onClick={handlerFunction}>
      Remove
    </Button>
  );
}

export default DeleteCartItem;
