import PropTypes from "prop-types";
import Closeable from "./Closeable";
import { useOutletContext } from "react-router-dom";
import ModalForm from "./ModalForm";

function AccountModal() {
  const { isUser, isMember, isAdmin, username } = useOutletContext();

  return (
    <Closeable>
      <ModalForm action="/account">
        <div>
          <p>Signed in as: {username}</p>
        </div>
        <div>
          <p>{isMember ? "Is a member" : "Is not a member"}</p>
        </div>
        <div>
          <p>{isAdmin ? "Is an admin" : "Is not an admin"}</p>
        </div>
        <button type="submit">Log Out</button>
      </ModalForm>
    </Closeable>
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
