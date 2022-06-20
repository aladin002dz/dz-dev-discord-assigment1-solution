import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserItems, reset } from "../features/useritems/userItemsSlice";

import UserItem from "../components/UserItem";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { userItems, isLoading, isError, message } = useSelector(
    (state) => state.userItems
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user || !user.token) {
      navigate("/login");
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
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {userItems.map((userItem) => (
              <UserItem key={userItem.id} userItem={userItem} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
