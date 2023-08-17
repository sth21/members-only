import PropTypes from "prop-types";
import CommentButton from "../controls/CommentButton";
import AccountButton from "../controls/AccountButton";
import AdminButton from "../controls/AdminButton";
import SignupButton from "../controls/SignupButton";
import LoginButton from "../controls/LoginButton";
import MemberButton from "../controls/MembershipButton";

import { NavBar, NavHeader, ButtonGroup } from "../styled-components/nav";

function Navbar({ isUser, isMember, isAdmin }) {
  return (
    <NavBar>
      <NavHeader>OnlyMembers</NavHeader>
      <NavButtonGroup isUser={isUser} isMember={isMember} isAdmin={isAdmin} />
    </NavBar>
  );
}

function NavButtonGroup({ isUser, isMember, isAdmin }) {
  if (isUser && isMember && isAdmin) {
    return (
      <ButtonGroup>
        <CommentButton />
        <AccountButton />
      </ButtonGroup>
    );
  } else if (isUser && isMember) {
    return (
      <ButtonGroup>
        <CommentButton />
        <AdminButton />
        <AccountButton />
      </ButtonGroup>
    );
  } else if (isUser && isAdmin) {
    return (
      <ButtonGroup>
        <CommentButton />
        <AccountButton />
      </ButtonGroup>
    );
  } else if (isUser) {
    return (
      <ButtonGroup>
        <CommentButton />
        <MemberButton />
        <AccountButton />
      </ButtonGroup>
    );
  } else {
    return (
      <ButtonGroup>
        <SignupButton />
        <LoginButton />
      </ButtonGroup>
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
