import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LogoutButton({ setCurrentUser }) {
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const res = await fetch("http://localhost:3000/auth/logout", {
        credentials: "include",
        method: "POST",
      });
      const data = await res.json();
      toast(data.msg);
      navigate("/");
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
