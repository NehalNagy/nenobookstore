import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import classes from "./SearchStore.module.css";
function SearchStore() {
  return (
    <Container className="mt-4">
      <Form>
        <div className={classes.searchBgColor + " row mb-5 "}>
          <div className="col-md-9">
            <Form.Group controlId="formSearch">
              <Form.Control
                type="text"
                placeholder="Search entire store here..."
                className={classes.searchInput + " shadow-none"}
              />
            </Form.Group>
          </div>
          <div className="col-md-3 text-end">
            <Button
              type="submit"
              className={classes.searchBtn + " border-0 rounded-0 pe-4 ps-4"}
            >
              Search
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default SearchStore;
