import Button from "~/components/button";
import Container from "~/components/container";
import NavAdmin from "~/components/nav-admin";
import "./index.css";

const ResidenceLetter = () => {
  return (
    <Container >
      <NavAdmin />
      <div className="residence-letter-container">
        <Button
          color="primary"
          size="icon"
          onClick={() => alert("Trabajando en ello.")}
        >
          Ver pdf
        </Button>
      </div>
    </Container>
  );
};

export default ResidenceLetter;
