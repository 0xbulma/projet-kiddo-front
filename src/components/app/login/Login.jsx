import React from "react";
import { CONNECT_USER } from "../../../graphql/query/users.query";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import Button from "../../shared/Button";
import LoadingComponent from "../../shared/loadingfiles/LoadingComponent";

const Login = () => {
  const [connectUser, { error, loading, data }] = useLazyQuery(CONNECT_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [next, setNext] = useState(false);
  useEffect(() => {
    if (data) {
      console.log("data login-->", data);
      if (email === data.connectUser.email) {
        console.log("connection réussie");
      }
    }
    if (error) {
      console.log("error", error);
    }
  }, [data, error, email]);

  return (
    <>
      <div>
        {!next ? (
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
                // console.log("email", email, "password", password);
                connectUser({
                  variables: { email: email, password: password },
                });
                setNext(true);
              }}
            >
              Connecter
            </Button>
          </div>
        ) : (
          <>
            {loading ? (
              <LoadingComponent></LoadingComponent>
            ) : (
              <div>Connection Réussie</div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Login;
