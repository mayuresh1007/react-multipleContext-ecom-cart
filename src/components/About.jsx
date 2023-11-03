import Toast from "react-bootstrap/Toast";

const About = () => {
  return (
    <div className="container mt-5">
      <h3>About page</h3>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">About Me</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
};

export default About;
