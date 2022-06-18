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
    console.log("inside dashboard");
    console.log(userItems);
  }, [isError, message, dispatch]);
  return (
    <>
      <h1>Dashboard</h1>
      <p>
        {/*         {userItems.map((userItem) => (
          <div key={userItem.id}>
            <h3>{userItem.name}</h3>
          </div>
        ))} */}
        {JSON.stringify(userItems)}
      </p>
    </>
  );
}
