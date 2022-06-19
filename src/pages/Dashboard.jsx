import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserItems, reset } from "../features/useritems/userItemsSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { userItems, isLoading, isError, message } = useSelector(
    (state) => state.userItems
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getUserItems());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);
  return (
    <>
      <h1>Dashboard</h1>
      <hr className="my-4"></hr>
      {isLoading ? (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <table class="table">
          <thead class="table-light">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {userItems.map((userItem) => (
              <tr key={userItem.id}>
                <th scope="row">{userItem.id}</th>
                <td>{userItem.name}</td>
                <td>{userItem.username}</td>
                <td>{userItem.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
