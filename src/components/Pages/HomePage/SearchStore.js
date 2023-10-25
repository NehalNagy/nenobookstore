import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import classes from "./SearchStore.module.css";
function SearchStore() {
  return (
    <Container className="mt-4">
      <Form>
        <div className="row">
          <div className="col-md-9">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Search Entire Store..." />
            </Form.Group>
          </div>
          <div className="col-md-3">
            <Button variant="primary" type="submit">
              Search
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default SearchStore;
