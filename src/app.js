import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

// useRef does not re-renders the app

function Heading() {
  return <div className="heading">GitHub User API</div>;
}

export default function App() {
  const ref = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await (
        await fetch(`https://api.github.com/users/${ref.current.value}`)
      ).json();
      if (response.login !== undefined) {
        Swal.fire({
          imageUrl: response.avatar_url,
          title: response.login,
          showConfirmButton: false,
          text: `Id : ${response.id}, Node-Id : ${response.node_id}`,
          footer: `<a href=${response.html_url} target="_blank"><i class="fab fa-github"></i></a>`,
          showCloseButton: true,
        });
      } else {
        Swal.fire({
          title: "Enter a valid username",
          confirmButtonText: "Alright!",
          showCloseButton: true,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "User not found",
        confirmButtonText: "Alright!",
        showCloseButton: true,
      });
    }
    ref.current.value = "";
  };
  return (
    <>
      <Heading />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>GitHub UserName</Form.Label>
          <Form.Control type="email" placeholder="Enter Name" ref={ref} />
        </Form.Group>

        <Button variant="success" type="submit" onClick={submitForm}>
          Search
        </Button>
      </Form>
    </>
  );
}
