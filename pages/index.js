import Head from "next/head";
import Image from "next/image";
import { Button, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import HeroBannerImg from "../public/img/home-page-banner-img.svg";

import { FaDove, FaPaperPlane } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Leading Edge</title>
        <meta name="description" content="Startup company in Bangladesh" />
        {/* font-family: 'Rambla', sans-serif; */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rambla:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        {/* font-family: 'Athiti', sans-serif; */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Athiti:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
        {/* font-family: 'Metrophobic', sans-serif; */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Metrophobic&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="py-5">
          <Container>
            <Row className="align-items-center">
              <Col xs={6}>
                <p>Top Web and Mobile Apps Development Company</p>
                <h1 className="fs-1 fw-bolder">
                  Your Trusted <br /> Development <br /> Partner
                </h1>
                <p>
                  We deliver web and mobile app development services to global
                  businesses since 1998, with 100% project delivery success.
                  Hire the best programmers at affordable prices. Our
                  design-focused approach and project execution processes help
                  you to deliver the right solutions.
                </p>
                <Button variant="primary">What We Do</Button>{" "}
              </Col>
              <Col xs={6}>
                <Image
                  src={HeroBannerImg}
                  layout="responsive"
                  className="p-3"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container>
            <h1 className="fs-2 fw-bolder pb-5">
              We Simplify Software Development Process
            </h1>
            <Row>
              <Col xs={3}>
                <Card className="border-0">
                  <Card.Header
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <div className="process-card-header">
                      <FaDove
                        className="process-icon"
                        style={{ color: "#FF9400" }}
                      />
                      <div class="process-line"></div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="fw-bold fs-4">Discover</Card.Title>
                    <Card.Text>
                      We shape brands through exploration, applying in-depth
                      research to challenge assumptions at every turn.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className="border-0">
                  <Card.Header
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <div className="process-card-header">
                      <FaDove
                        className="process-icon"
                        style={{ color: "#4BD965" }}
                      />
                      <div class="process-line"></div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="fw-bold fs-4">Design</Card.Title>
                    <Card.Text>
                      We shape brands through exploration, applying in-depth
                      research to challenge assumptions at every turn.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className="border-0">
                  <Card.Header
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <div className="process-card-header">
                      <FaDove
                        className="process-icon"
                        style={{ color: "#6056DE" }}
                      />
                      <div class="process-line"></div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="fw-bold fs-4">Build</Card.Title>
                    <Card.Text>
                      We shape brands through exploration, applying in-depth
                      research to challenge assumptions at every turn.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={3}>
                <Card className="border-0">
                  <Card.Header
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <div className="process-card-header">
                      <FaPaperPlane
                        className="process-icon"
                        style={{ color: "#007AFE" }}
                      />
                      {/* <div class="process-line"></div> */}
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="fw-bold fs-4">Deliver</Card.Title>
                    <Card.Text>
                      We shape brands through exploration, applying in-depth
                      research to challenge assumptions at every turn.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <div
            class="about-section"
            // image src specified in stylesz
            style={{
              height: "70vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container>
              <Row>
                <Col xs={5}>
                  <Card
                    className="bg-dark text-white p-4"
                    style={{ width: "auto" }}
                  >
                    <Card.Title className="fs-3 fw-bolder">
                      About Our Company
                    </Card.Title>
                    <Card.Text>
                      Amid the stress around pandemic of COVID-19, the team
                      IndiaNIC is committed to providing uninterrupted services
                      to all of our clients as well as ready to take up new
                      assignments. All of our team members, including engineers,
                      project managers, and business consulting teams are
                      available during business hours and are safe working from
                      home.
                    </Card.Text>
                    <ListGroup className="border-0 py-3">
                      <ListGroup.Item className="d-flex align-center bg-dark text-white p-0 border-0">
                        <FaDove />
                        <p>Cras justo odio</p>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white p-0 border-0">
                        Dapibus ac facilisis in
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white p-0 border-0">
                        Morbi leo risus
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white p-0 border-0">
                        Porta ac consectetur ac
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white p-0 border-0">
                        Porta ac consectetur ac
                      </ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary">What We Do</Button>{" "}
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
