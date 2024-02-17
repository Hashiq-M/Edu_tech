function SignUp() {
  function Regester() {
    alert("Registered Successful");
  }
  return (
    <div id="container">
      <h3>SignUp</h3>
      <form>
        <label htmlFor="emailin">Email:</label>
        <br />
        <input type="text" id="emailin"></input>
        <br />
        <label htmlFor="passwordin">Password:</label>
        <br />
        <input type="password" id="passwordin"></input>
        <br />
      </form>
      <button onClick={Regester}>SignUp</button>
    </div>
  );
}

export default SignUp;
