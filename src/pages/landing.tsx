import { Link } from "react-router-dom";

const landing = () => {
  return (
    <div className="landingPage">
      <h1>랜딩페이지</h1>
      <ul className="landingPage__router-link">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default landing;
