import { useState } from "react";

import FormRegister from "./FormRegister";
import NextRegister from "./NextRegister";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [next, setNext] = useState(false);
  return (
    <div>
      {!next ? (
        <FormRegister
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          verifyPassword={verifyPassword}
          setVerifyPassword={setVerifyPassword}
          step={next}
          setStep={setNext}
        />
      ) : (
        <NextRegister />
      )}
    </div>
  );
}

export default Register;
