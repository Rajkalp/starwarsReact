import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Stack, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import CardHeader from "react-bootstrap/esm/CardHeader";

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

const Details = () => {
  let params = useParams();

  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + params.id)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

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
      <div className="container-fluid mt-3">
        <Card>{data?.name}</Card>
      </div>
    </Container>
  );
};

export default Details;
