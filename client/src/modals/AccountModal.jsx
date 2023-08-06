import PropTypes from "prop-types";
import LogoutButton from "../controls/LogoutButton";

function AccountModal({ currentUser }) {
  return (
    <div>
      <div>
        <p>Signed in as</p>
        <p>{currentUser.username}</p>
      </div>
      <div>
        <p>Membership status:</p>
        <p>{currentUser.memberStatus ? "Is a member" : "Is not a member"}</p>
      </div>
      <div>
        <p>Admin status:</p>
        <p>{currentUser.memberStatus ? "Is an admin" : "Is not an admin"}</p>
      </div>
      <LogoutButton />
    </div>
  );
}
