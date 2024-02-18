import "./SignUp.css";
function Signup() {
  function Register() {
    alert("Registered Successful");
  }
  return (
    <div className="mid">
      <div id="container"></div>
      <div className="mid1">
        <form className="form2" onSubmit={Register}>
          <ul className="ul">
            <li className="li">
              <a className="a" href="#">
                STUDENT
              </a>
            </li>
            <li className="li">
              <a className="a" href="#">
                TEACHER
              </a>
            </li>
          </ul>
          <h1 className="title1">SignUp</h1>
          <label className="email" htmlFor="emailin">
            Email:
          </label>
          <br />
          <input className="input2" type="text" id="emailin" required></input>
          <br />
          <label className="pass" htmlFor="passwordin">
            Password:
          </label>
          <br />
          <input
            className="input2"
            type="password"
            id="passwordin"
            required
            pattern=".[0-9 A-Z a-z]{6,10}"
            title="mixed with alphabet and number with limit 6-10"
          ></input>
          <br />
          <input className="submit" type="submit" value="Signup"></input>
        </form>
      </div>
    </div>
  );
}

export default Signup;
