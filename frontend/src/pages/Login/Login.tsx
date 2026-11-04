import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../../hooks/useActions";
import { login, logout } from "../../redux/actions/userActions";

// Typescript and data imports

// Icon helper function imported
import getIcon from "../../helperFunctions/getIcon";

import CustomButton from "../../components/Button/Button";

// Material UI and bootstrap Components import

import { useTypedSelector } from "../../hooks/useTypedSelector";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  // const userLogin = useSelector(state => state.userLogin)
  const dispatch = useAppDispatch();
  const { error, loading, userInfo } = useTypedSelector((state) => state.userLogin);

  const objectLength = Object.keys(userInfo).length;
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="section pb_45 pt_45">
        {/* Title */}
        <div className="section_title mb_20">
          <span></span>
          <h6 className="section_title_text">Login Page</h6>
          {error && <p>{error}</p>}
          {loading && <h3>Loading...</h3>}
        </div>
        <div>
          {Object.keys(userInfo).length ? (
            <div>
              <p>User Name: {userInfo?.userInfo?.name}</p>
              <p>User Email: {userInfo?.userInfo?.email}</p>
              <p>Admin Status: {userInfo?.userInfo?.isAdmin && <span>True</span>}</p>
              <Button variant="secondary" onClick={logoutHandler}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              {/* ###################### FORM ######################*/}
              <Form onSubmit={submitHandler} style={{ width: "100%" }}>
                <Form.Group>
                  <Form.Label htmlFor="login-email">E-mail</Form.Label>
                  <Form.Control
                    id="login-email"
                    name="email"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="login-password">Password</Form.Label>
                  <Form.Control
                    id="login-password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div>
                  <CustomButton text="Login" icon={getIcon("SendIcon")} />
                  <Button variant="secondary" onClick={logoutHandler}>
                    Logout
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// export default Login
