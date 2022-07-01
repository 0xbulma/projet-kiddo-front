import "./register.css";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../graphql/mutation/register.mutation";
import Button from "../../shared/Button";

const Form = (props) => {
  const [addUser, { error, data, loading }] = useMutation(CREATE_USER);
  return (
    <>
      <div className="form-container">
        <h2 className="form-title">Bienvenu.e.s sur Kiddo</h2>
        <form className="form">
          <input
            className="input-form-register rounded-3xl"
            value={props.email}
            type="email"
            placeholder="email"
            onChange={(e) => {
              props.setEmail(e.target.value);
            }}
          />
          <input
            className="input-form-register rounded-3xl"
            value={props.password}
            type="password"
            placeholder="password"
            onChange={(e) => {
              props.setPassword(e.target.value);
            }}
          />
          <input
            className="input-form-register rounded-3xl"
            value={props.verifyPassword}
            type="password"
            placeholder="verify password"
            onChange={(e) => {
              props.setVerifyPassword(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              if (props.password === props.verifyPassword) {
                // props.setNext(true);
                addUser({
                  variables: {
                    input: {
                      password: props.password,
                      email: props.email,
                    },
                  },
                });
              } else {
                alert("les mots de passe ne correspondent pas");
              }
            }}
          >
            S'inscrire
          </Button>
        </form>
        <p className="p-6">déjà inscrit ?</p>
        <Button>Connectez vous</Button>
      </div>
    </>
  );
};
export default Form;
