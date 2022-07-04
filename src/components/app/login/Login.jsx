import React from "react";
import { CONNECT_USER } from "../../../graphql/query/connect.query";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import Button from "../../shared/Button";

const Login = () => {
  const [connectUser, { error, loading, data }] = useLazyQuery(CONNECT_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (data) {
      console.log("data-->", data);
      if (email === data.connectUser.email) {
        console.log("connection réussie");
      }
    }
    if (error) {
      console.log("error", error);
    }
  }, [data, error]);

  return (
    <div>
      {step === 1 ? (
        <div className="form-container">
          <form className="form mb-4">
            <input
              className="input-form-register rounded-3xl"
              value={email}
              type="email"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
                //   console.log(e.target.value);
              }}
            />
            <input
              className="input-form-register rounded-3xl"
              value={password}
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
                //   console.log(e.target.value);
              }}
            />
          </form>
          <Button
            onClick={() => {
              console.log("email", email, "password", password);
              connectUser({
                variables: { email: email, password: password },
              });
            }}
          >
            Connecter
          </Button>
        </div>
      ) : (
        <div>Connection Réussie</div>
      )}
    </div>
  );
};

export default Login;
