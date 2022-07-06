import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../shared/Button";
import ModalBackdrop from "../../shared/modal/ModalBackdrop";
import Login from "../login/Login";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../graphql/mutation/createUser.mutation";
import "./register.css";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [next, setNext] = useState(false);
  // Pour Modal - state
  const [open, setIsOpen] = useState(false);

  const [addUser, { error, data }] = useMutation(CREATE_USER);
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
  return (
    <>
      {!next ? (
        <div className="form-container">
          <h2 className="form-title">Bienvenu.e.s sur Kiddo</h2>
          <p className="p-1"> Créez votre compte</p>
          <form className="form">
            <input
              className="rounded-3xl w-80 border border-gray-400"
              value={email}
              type="email"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="rounded-3xl w-80 border border-gray-400"
              value={password}
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              className="rounded-3xl w-80 border border-gray-400"
              value={verifyPassword}
              type="password"
              placeholder="verify password"
              onChange={(e) => {
                setVerifyPassword(e.target.value);
              }}
            />
          </form>
          <Button
            onClick={() => {
              if (email && password && verifyPassword) {
                if (password === verifyPassword) {
                  addUser({
                    variables: {
                      input: {
                        password: password,
                        email: email,
                      },
                    },
                  });
                  setNext(true);
                } else {
                  alert("les mots de passe ne correspondent pas");
                }
              } else {
                alert("ces champs sont obligatoires");
              }
            }}
          >
            S'inscrire
          </Button>
          <div>
            <p>déjà inscrit ?</p>
            {/* Pour ouvrir la modal */}
            <Button
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Connectez vous
            </Button>
            {/* le contenu de la modal */}
            <ModalBackdrop
              composant={<Login />}
              open={open}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      ) : (
        <>
          <div>Vous êtes inscris</div>
          {setTimeout(() => {
            navigate("/user");
          }, 3000)}
        </>
      )}
    </>
  );
}

export default Register;
