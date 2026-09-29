import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import "./ErrorMessage.css";

function ErrorMessage({ message }) {
  return (
    <div className="error-container">

      <Alert variant="danger">

        <div className="error-content">

          <i className="bi bi-exclamation-triangle-fill"></i>

          <div>
            <h5>Something went wrong</h5>

            <p>{message}</p>
          </div>

        </div>

        <Button
          variant="outline-danger"
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>

      </Alert>

    </div>
  );
}

export default ErrorMessage;