import { gql, useLazyQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";

const SignUp = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  //   const [errorMessage, setErrorMessage] = useState("");

  const registerUserGQL = gql`
    mutation Mutation($input: UserInput) {
      createUser(input: $input) {
        _id
        email
        password
        created_at
      }
    }
  `;
  const registerUserGQLinput = {
    input: {
      email: email,
      password: password,
    },
  };

  const connectUserGql = gql`
    query Query {
      Users {
        email
        password
      }
    }
  `;

  connectUser({ variables: `${connectUserGqlInput}` });
  const connectUserGqlInput = {
    input: {
      email: email,
      password: password,
    },
  };

  const [registerUser] = useMutation(registerUserGQL, {
    onCompleted: (data) => {
      console.log("requete");
      completeRegister(data);
    },
    onError: (error) => {
      console.log("error");
    },
  });
  const [connectUser] = useLazyQuery(connectUserGql, {
    onCompleted: (data) => {
      console.log("requete");
      finalconnectUser(data);
    },
    onError: (error) => {
      console.log("error");
    },
  });

  const completeRegister = (repsonse) => {};
  const finalconnectUser = (repsonse) => {};

  return (
    <>
      <div>
        <h1>Créez un compte</h1>
        <input
          type="text"
          placeholder="Pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Pseudo"
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
        <input
          type="submit"
          value={"valider"}
          onClick={() => {
            registerUser({ variables: `${registerUserGQLinput}` });
          }}
        />
        {/* <span>{errorMessage}</span> */}
      </div>
    </>
  );
};

export default SignUp;
