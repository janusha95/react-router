import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  // you can either use this
  //   const params = useParams();
  //   const userId = params.userId;
  // Or you can destructure the params object and use like this:
  const { userId } = useParams();

  return <div>UserDetails of user {userId} </div>;
}

export default UserDetails;
