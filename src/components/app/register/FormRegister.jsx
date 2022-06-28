const Form = (props) => {
  const handleSubmit = (e) => {
    e.preDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={props.username}
        type="text"
        placeholder="username"
        onChange={(e) => {
          props.setUsername(e.target.value);
          //   console.log(e.target.value);
        }}
      />
      <input
        value={props.email}
        type="email"
        placeholder="email"
        onChange={(e) => {
          props.setEmail(e.target.value);
          //   console.log(e.target.value);
        }}
      />
      <input
        value={props.password}
        type="password"
        placeholder="password"
        onChange={(e) => {
          props.setPassword(e.target.value);
          //   console.log(e.target.value);
        }}
      />
      <input
        value={props.verifyPassword}
        type="password"
        placeholder="verify password"
        onChange={(e) => {
          props.setVerifyPassword(e.target.value);
          //   console.log(e.target.value);
        }}
      />
      <input
        type="submit"
        value={"Valider"}
        onClick={() => {
          if (props.password === props.verifyPassword) {
            props.setStep(2);
          } else {
            alert("les mots de passe ne correspondent pas");
          }
        }}
      />
    </form>
  );
};
export default Form;
