import PropTypes from "prop-types";

function LogoutButton({ setCurrentUser }) {
    async function handleClick() {
        try {
            const res = await fetch("localhost:3000/logout");
            const data = await res.json();
            setCurrentUser(null);
            // send a toast w/ data
        } catch (err) {
            // send a toast w/ error
        }
    }

    return <button onClick={handleClick}>Log Out</button>
}

LogoutButton.propTypes = {
    setCurrentUser: PropTypes.func,
}

export default LogoutButton;