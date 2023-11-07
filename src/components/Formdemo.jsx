import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formdemo = () => {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const postData = async (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((res) => console.log(res));
      setFormData({
        title: '',
        body: '',
      });
  };
  const handleFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    // Update the formData state with the new field value
    setFormData({
      ...formData, // Copy the existing state
      [fieldName]: fieldValue, // Update the specific field
    });
  };

  return (
    <div className="container mt-5">
      <div className="container mt-5">
        <Form className="mt-5 container" onSubmit={postData}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
              onChange={handleFieldChange}
              name="title"
              value={formData.title}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              placeholder="description"
              // value={body}
              // onChange={(e) => setBody(e.target.value)}
              onChange={handleFieldChange}
              name="body"
              value={formData.body}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Formdemo;

// const dataPost = {
//   method: "POST",
//   body: JSON.stringify({
//     title: title,
//     body: body,
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// };

// function postData(e) {
//   e.preventDefault();

//   fetch("https://jsonplaceholder.typicode.com/posts", dataPost)
//     .then((response) => response.json()) //
//     // .then((json) => alert(JSON.stringify(json)))
//     .then((json) => console.log(JSON.stringify(json)))
//     .catch((err) => console.log(err));
// }
