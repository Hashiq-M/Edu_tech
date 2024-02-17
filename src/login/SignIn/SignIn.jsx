import { Link } from "react-router-dom";
import "./signin_style.css";
function SignIn() {
  function logedin() {
    alert("Login Successful");
  }
  return (
    <div className="main">
      <div className="list-buttons">
        <ul>
          <li className="list">
            <a href="#" className="lbut">
              STUDENT
            </a>
          </li>
        </ul>
        <ul>
          <li className="list">
            <a href="#" className="lbut">
              TEACHER
            </a>
          </li>
        </ul>
      </div>
      <h1 className="title">Login</h1>
      <form>
        <label htmlFor="emailup">Email:</label>
        <br />
        <input type="text" id="emailup"></input>
        <br />
        <label htmlFor="passwordup">Password:</label>
        <br />
        <input type="password" id="passwordup"></input>
        <br />
      </form>
      <Link to="/forgetpassword">Forget Password</Link>
      <h4>
        Dont you have an account? <Link to="/signup">SignUp</Link>
      </h4>
      <button onClick={logedin}>Login</button>
    </div>
  );
}

export default SignIn;
