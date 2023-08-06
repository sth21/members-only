import PropTypes from "prop-types";
import { toast } from "react-toastify";

function LogoutButton({ setCurrentUser }) {
  async function handleClick() {
    try {
      const res = await fetch("localhost:3000/logout");
      const data = await res.json();
      setCurrentUser(null);
      toast(data.msg);
    } catch (err) {
      toast(err.message);
    }
  }

  return <button onClick={handleClick}>Log Out</button>;
}

LogoutButton.propTypes = {
  setCurrentUser: PropTypes.func,
};

export default LogoutButton;
