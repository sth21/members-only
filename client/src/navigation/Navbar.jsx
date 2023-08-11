import PropTypes from "prop-types";
import CommentButton from "../controls/CommentButton";
import AccountButton from "../controls/AccountButton";
import AdminButton from "../controls/AdminButton";
import SignupButton from "../controls/SignupButton";
import LoginButton from "../controls/LoginButton";

function Navbar({ isUser, isMember, isAdmin }) {
  return (
    <nav>
      <h1>OnlyMembers</h1>
      <NavButtonGroup isUser={isUser} isMember={isMember} isAdmin={isAdmin} />
    </nav>
  );
}

function NavButtonGroup({ isUser, isMember, isAdmin }) {
  if (isUser && isMember && isAdmin) {
    return (
      <>
        <CommentButton />
        <AccountButton />
      </>
    );
  } else if (isUser && isMember) {
    return (
      <>
        <CommentButton />
        <AdminButton />
        <AccountButton />
      </>
    );
  } else if (isUser && isAdmin) {
    return (
      <>
        <CommentButton />
        <AccountButton />
      </>
    );
  } else {
    return (
      <>
        <SignupButton />
        <LoginButton />
      </>
    );
  }
}

Navbar.propTypes = {
  isUser: PropTypes.bool,
  isMember: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

NavButtonGroup.propTypes = {
  isUser: PropTypes.bool,
  isMember: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

export default Navbar;
