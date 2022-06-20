import { useDispatch } from "react-redux";
import { deleteUserItem } from "../features/useritems/userItemsSlice";

export default function UserItem({ userItem }) {
  const dispatch = useDispatch();

  return (
    <tr key={userItem.id}>
      <th scope="row">{userItem.id}</th>
      <td>{userItem.name}</td>
      <td>{userItem.username}</td>
      <td>{userItem.email}</td>
      <td>
        <button type="button" className="btn btn-warning">
          Edit
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          /* onClick={() => dispatch(deleteUserItem(userItem.id))} */
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
