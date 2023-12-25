import Logo from "../assets/signin logo.png";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="signUp gap-4">
      <div className="col-5" data-aos="zoom-in">
        <img src={Logo} alt="" />
      </div>
      <div
        className="col  bg-white px-5 py-3 rounded-2xl flex flex-col"
        data-aos="fade-up"
      >
        <h1 className="text-[#004225]">Log In</h1>
        <p className="text-lg font-light">
          Enter account credentials to log in to your account
        </p>
        <Form className=" flex flex-col items-center justify-center">
          <Row className="mb-3 gap-5 w-100">
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label className="text-xl font-light">Phone No</Form.Label>
              <Form.Control
                className="p-3"
                type="phone"
                placeholder="Enter phone no"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3 gap-5 w-100">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-xl font-light">Email</Form.Label>
              <Form.Control
                className="input p-3"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
          </Row>

          <Row className="mb-5 gap-5 w-100">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="text-xl font-light">Password</Form.Label>
              <Form.Control
                className="input p-3"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Row>
          <Link to="/dashboard">
            <button
              className="bg-[#004225] text-white px-5 py-3 rounded-xl"
              type="submit"
              data-aos="fade-up"
            >
              Log In
            </button>
          </Link>
        </Form>
        <div className="mt-3">
          <p>
            Don’t have an account with us?{" "}
            <span>
              <Link to="/signUp">
                <a href="">Create an account</a>
              </Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
