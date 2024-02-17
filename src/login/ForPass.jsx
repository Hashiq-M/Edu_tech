function ForgetPassword() {
  function Reset() {
    alert("Passeord Reseted Successful");
  }
  return (
    <>
      <h1>Change Password</h1>
      <label htmlFor="emailpass">Email:</label>
      <br />
      <input type="text" id="emailpass"></input>
      <br />
      <label htmlFor="passwordpass">Password:</label>
      <br />
      <input type="password" id="passwordpass"></input>
      <br />
      <label htmlFor="passwordre">Renter password:</label>
      <br />
      <input type="password" id="passwordre"></input>
      <br />
      <button onClick={Reset}>Reset</button>
    </>
  );
}

export default ForgetPassword;
