import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Stack, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Character from "../characterInterface";

interface Vehicle {
  name: String;
  model: String;
  manufacturer: String;
  cost_in_credits: String;
  length: String;
  max_atmosphering_speed: String;
  crew: String;
  passengers: String;
  cargo_capacity: String;
  consumables: String;
  vehicle_class: String;
  pilots: Array<URL>;
  films: Array<URL>;
  created: Date;
  edited: Date;
  url: String;
}

const Details = () => {
  let params = useParams();
  const [data, setData] = useState<Character>();

  const [vehicle, setVehicles] = useState<Array<Vehicle>>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + params.id)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log("data", json);
        json?.vehicles?.forEach((element: RequestInfo | URL) => {
          fetch(element)
            .then((res) => res.json())
            .then((json) => {
              setVehicles((vehicle) => [...vehicle, json]);
              console.log("json", json);
            });
        });
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
      <div className="container mt-3">
        <Row>
          <Col style={{ borderRight: "2px solid red" }}>
            <h1>{data?.name}</h1>
            <h3>{data?.skin_color}</h3>
            <h3>{data?.mass}</h3>
            <h3>{data?.height}</h3>
            <h3>{data?.gender}</h3>
            <h3>{data?.birth_year}</h3>
          </Col>
          <Col>
            {vehicle?.map((value, index) => (
              <h1 key={index}>{value?.name}</h1>
            ))}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Details;
