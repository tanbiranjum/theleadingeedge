import Head from "next/head";
import Image from "next/image";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
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
            <Row>
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
            <h1 className="fs-2 fw-bolder pb-4">
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
      </main>
      <footer></footer>
    </div>
  );
}
