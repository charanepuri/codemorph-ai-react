import { Link } from "react-router-dom";

import Button from "../../components/common/Button";

import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <Link to="/">
        <Button>Back to Home</Button>
      </Link>

    </div>
  );
}

export default NotFound;