import PropTypes from "prop-types";
import LogoutButton from "../controls/LogoutButton";
import Closeable from "./Closeable";
import { useOutletContext } from "react-router-dom";

function AccountModal() {
  const { isUser, isMember, isAdmin, username } = useOutletContext();

  return (
    <div>
      <div>
        <p>Signed in as</p>
        <p>{username}</p>
      </div>
      <div>
        <p>Membership status:</p>
        <p>{isMember ? "Is a member" : "Is not a member"}</p>
      </div>
      <div>
        <p>Admin status:</p>
        <p>{isAdmin ? "Is an admin" : "Is not an admin"}</p>
      </div>
      <LogoutButton />
    </div>
  );
}

AccountModal.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    memberStatus: PropTypes.bool,
    adminStatus: PropTypes.bool,
  }),
};

export default AccountModal;
