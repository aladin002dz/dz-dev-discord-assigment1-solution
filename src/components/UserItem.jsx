export default function UserItem({ userItem, showDeleteConfirmation }) {
  const deleteUserItem = () => {
    console.log("clicking delete button");
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("deleteModal").style.display = "block";
    document.getElementById("deleteModal").classList.add("show");
    showDeleteConfirmation(userItem.id);
  };

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
          onClick={deleteUserItem}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
