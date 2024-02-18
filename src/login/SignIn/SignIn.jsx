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
      <form className="form1">
        <label className="label1" htmlFor="emailup">
          Email:
        </label>
        <br />
        <input className="input1" type="text" id="emailup" required></input>
        <br />
        <label className="label1" htmlFor="passwordup">
          Password:
        </label>
        <br />
        <input
          className="input1"
          type="password"
          id="passwordup"
          required
          pattern=".[0-9 A-Z a-z]{6,10}"
          title="mixed with alphabet and number with limit 6-10"
        ></input>
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
