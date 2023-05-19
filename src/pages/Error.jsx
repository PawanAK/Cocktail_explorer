import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>!!OOpsy It's a dead End</h1>
        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
