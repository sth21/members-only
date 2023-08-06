import PropTypes from "prop-types";

function MembershipButton({ setModal }) {
  return <button onClick={() => setModal("Membership")}>Join Club</button>;
}

MembershipButton.propTypes = {
  setModal: PropTypes.func,
};

export default MembershipButton;
