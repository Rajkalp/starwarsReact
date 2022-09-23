import { useState, useEffect } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Navbar,
  Container,
  Stack,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import { useCookies } from "react-cookie";

interface Data {
  name: String;
  height: String;
  mass: String;
  hair_color: String;
  skin_color: String;
  eye_color: String;
  birth_year: String;
  gender: String;
  homeworld: String;
  films: Array<Object>;
  species: Array<Object>;
  vehicles: Array<Object>;
  starships: Array<Object>;
  created: Data;
  edited: Data;
  url: String;
}

const Home = () => {
  const [data, setData] = useState<Array<Data>>();
  const [pageNo, setPageNo] = useState<number>(1);
  const [loading, setLoading] = useState<Boolean>(true);
  const [fav, setFav] = useState(["test", 2]);

  const [cookies, setCookie, removeCookie] = useCookies(["fav"]);

  useEffect(() => {
    setLoading(false);
    fetch("https://swapi.dev/api/people?page=" + pageNo)
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
      });
  }, [data]);

  const pageNext = () => {
    setPageNo(pageNo + 1);
    setLoading(true);
  };

  const pagePrev = () => {
    setPageNo(pageNo - 1);
    setLoading(true);
  };

  const baseUrl = "http://localhost:3000/details/";
  return (
    <Container fluid>
      <Navbar
        bg="dark"
        style={{
          borderBottomColor: "#ffc107",
          borderBottomStyle: "solid",
        }}
      >
        <Stack direction="horizontal" gap={5}>
          <Navbar.Brand className="text-warning">
            Star Wars Characters
          </Navbar.Brand>
        </Stack>
      </Navbar>
      <div className="container mt-4">
        {loading ? (
          <Spinner animation="border" variant="warning">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <ListGroup>
            {data?.map((value, index) => (
              <ListGroupItem
                className="text-warning border-warning bg-dark"
                key={index}
              >
                <Stack direction="horizontal" gap={5}>
                  <a
                    className="text-decoration-none text-warning"
                    href={baseUrl + value.url.split("/")[5]}
                  >
                    {value.name}
                  </a>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="ms-auto"
                    onClick={() => localStorage.setItem("name", "test")}
                  >
                    <svg
                      fill="#FFFF00"
                      width="12"
                      height="12"
                      version="1.1"
                      id="lni_lni-heart-filled"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M32,57.6c-0.8,0-1.6-0.3-2.2-0.8c-2.3-2-4.6-3.9-6.6-5.6l0,0c-5.8-4.9-10.9-9.2-14.4-13.4C4.8,33,3,28.6,3,23.7
	c0-4.7,1.6-9.1,4.6-12.3c3-3.2,7.1-5,11.6-5c3.3,0,6.4,1.1,9.1,3.1c1.1,0.8,2,1.8,2.9,2.9c0.4,0.5,1.1,0.5,1.5,0
	c0.9-1.1,1.9-2,2.9-2.9c2.7-2.1,5.8-3.1,9.1-3.1c4.5,0,8.6,1.8,11.6,5c3,3.2,4.6,7.6,4.6,12.3c0,4.9-1.8,9.3-5.8,14
	c-3.5,4.2-8.6,8.5-14.4,13.4c-2,1.7-4.3,3.6-6.6,5.6C33.6,57.3,32.8,57.6,32,57.6z"
                      />
                    </svg>
                  </Button>
                </Stack>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
        <h1>{cookies.fav}</h1>

        <Stack className="mt-3 mb-3" direction="horizontal" gap={5}>
          <Button variant="warning" onClick={pagePrev}>
            Prev
          </Button>
          <Button variant="warning" className="ms-auto" onClick={pageNext}>
            Next
          </Button>
        </Stack>
      </div>
    </Container>
  );
};

export default Home;
