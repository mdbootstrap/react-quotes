import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function QuoteboxWithLikesCounter() {
  return (
    <section className="vh-100 bg-light">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="5">
            <MDBCard
              className="text-white"
              style={{ backgroundColor: "#1f959b", borderRadius: "15px" }}
            >
              <MDBCardBody className="p-5">
                <MDBIcon fas icon="quote-left mb-4" size="2x" />

                <p className="lead">
                  Genius is one percent inspiration and ninety-nine percent
                  perspiration.
                </p>

                <hr />

                <div className="d-flex justify-content-between">
                  <p className="mb-0">Thomas Edison</p>
                  <MDBTypography tag="h6" className="mb-0">
                    <span
                      className="badge rounded-pill"
                      style={{backgroundColor: "rgba(0,0,0, 0.2)"}}
                    >
                      876
                    </span>{" "}
                    <MDBIcon fas icon="heart ms-2" />
                  </MDBTypography>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
