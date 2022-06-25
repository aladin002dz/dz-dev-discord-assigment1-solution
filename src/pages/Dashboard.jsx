import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getUserItems,
  reset,
  deleteUserItem,
} from "../features/useritems/userItemsSlice";

import UserItem from "../components/UserItem";
import DeleteConfirmation from "../components/DeleteConfirmation";

export default function Dashboard() {
  const [currUserId, setCurrUserId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { userItems, isLoading, isError, message } = useSelector(
    (state) => state.userItems
  );

  const showDeleteConfirmation = (userItemId) => {
    setCurrUserId(userItemId);
    console.log("clicking delete button");
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("deleteModal").style.display = "block";
    document.getElementById("deleteModal").classList.add("show");
  };
  const deleteConfirmed = (id) => {
    console.log("delete confirmeed");
    console.log(id);
    dispatch(deleteUserItem(id));
  };

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
      <div className="d-flex justify-content-between">
        <h1>Dashboard</h1>
        <button className="btn btn-primary h2">Add User</button>
      </div>

      <hr className="my-4"></hr>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
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
                <UserItem
                  key={userItem.id}
                  userItem={userItem}
                  showDeleteConfirmation={showDeleteConfirmation}
                />
              ))}
            </tbody>
          </table>
          <DeleteConfirmation
            runDelete={deleteConfirmed}
            currUserId={currUserId}
          />
        </>
      )}
      <div
        className="modal-backdrop fade show"
        id="backdrop"
        style={{ display: "none" }}
      ></div>
    </>
  );
}
