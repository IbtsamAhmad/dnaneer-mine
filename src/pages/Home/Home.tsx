import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home</h1>
      <br />
      <a href="/login">Login</a>
      <br />
      <br />
      <a href="/signup">Sign up</a>
      <br />
      <Link to="/user-information">Personal Info</Link>
    </div>
  );
};

export default Home;
