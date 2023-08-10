import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function AccountButton() {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/account")}>View Account</button>;
}
