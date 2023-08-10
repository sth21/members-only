import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <p>Whoops! An unexpected error occurred?!</p>
      <Link to="/">Go Back</Link>
    </>
  );
}
