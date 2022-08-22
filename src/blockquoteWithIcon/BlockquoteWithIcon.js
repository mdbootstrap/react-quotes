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
import "./blockquoteWithIcon.css";

export default function BlockquoteWithIcon() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#f5f7fa" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="9" lg="7" xl="5">
            <MDBCard>
              <MDBCardBody>
                <MDBTypography
                  blockquote
                  className="blockquote-custom bg-white px-3 pt-4"
                >
                  <div className="blockquote-custom-icon bg-info shadow-1-strong">
                    <MDBIcon fas icon="quote-left text-white" />
                  </div>
                  <p className="mb-0 mt-2 font-italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    <a href="#" className="text-info">
                      @consequat
                    </a>
                    ."
                  </p>
                  <footer className="blockquote-footer pt-4 mt-4 border-top">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </MDBTypography>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
