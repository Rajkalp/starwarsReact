import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Stack, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
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
      });
  }, []);

  useEffect(() => {
    data?.vehicles?.forEach((element: RequestInfo | URL) => {
      fetch(element)
        .then((res) => res.json())
        .then((json) => {
          setVehicles((vehicle) => [...vehicle, json]);
        });
    });
  }, [data]);

  return (
    <Container fluid>
      <Navbar
        className="justify-content-center"
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
          <Col xs={4} style={{ borderRight: "2px solid red" }}>
            <h1
              style={{
                fontSize: "50px",
                fontWeight: "10",
                fontStyle: "italic",
                color: "red",
              }}
            >
              {data?.name}
            </h1>
          </Col>
          <Col>
            <Row>
              <Col>
                <h3
                  style={{
                    fontSize: "25px",
                    fontWeight: "10",
                    fontStyle: "italic",
                    color: "red",
                  }}
                >
                  Skin Color:
                </h3>
              </Col>

              <Col>
                <h3
                  style={{
                    fontSize: "25px",
                    fontWeight: "10",
                    fontStyle: "italic",
                    color: "red",
                  }}
                >
                  {data?.skin_color}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3
                  style={{
                    fontSize: "25px",
                    fontWeight: "10",
                    fontStyle: "italic",
                    color: "red",
                  }}
                >
                  Mass:
                </h3>
              </Col>

              <Col>
                <h3
                  style={{
                    fontSize: "25px",
                    fontWeight: "10",
                    fontStyle: "italic",
                    color: "red",
                  }}
                >
                  {data?.mass}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3
                  style={{
                    fontSize: "25px",
                    fontWeight: "10",
                    fontStyle: "italic",
                    color: "red",
                  }}
                >
                  Height:
                </h3>
              </Col>

              <Col>
                <h3
                  style={{
                    fontSize: "25px",
                    fontWeight: "10",
                    fontStyle: "italic",
                    color: "red",
                  }}
                >
                  {data?.height}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3
                  style={{
                    fontSize: "25px",
                    fontWeight: "10",
                    fontStyle: "italic",
                    color: "red",
                  }}
                >
                  Gender:
                </h3>
              </Col>

              <Col>
                <h3
                  style={{
                    fontSize: "25px",
                    fontWeight: "10",
                    fontStyle: "italic",
                    color: "red",
                  }}
                >
                  {data?.gender}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3
                  style={{
                    fontSize: "25px",
                    fontWeight: "10",
                    fontStyle: "italic",
                    color: "red",
                  }}
                >
                  DOB:
                </h3>
              </Col>

              <Col>
                <h3
                  style={{
                    fontSize: "25px",
                    fontWeight: "10",
                    fontStyle: "italic",
                    color: "red",
                  }}
                >
                  {data?.birth_year}
                </h3>
              </Col>
            </Row>

            {vehicle && (
              <Row>
                <Col>
                  <h1
                    style={{
                      fontSize: "25px",
                      fontWeight: "10",
                      fontStyle: "italic",
                      color: "red",
                    }}
                  >
                    vehicles:{" "}
                  </h1>
                </Col>

                <Col>
                  <div>
                    {vehicle?.map((value, index) => (
                      <span
                        style={{
                          fontSize: "25px",
                          fontWeight: "10",
                          fontStyle: "italic",
                          color: "red",
                        }}
                        key={index}
                      >
                        {index + 1}.{value?.name}
                        <br />
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Details;
