import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function SquareQuoteboxes() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#FFE7C7" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <figure
              className="text-center bg-white py-5 px-4 shadow-2"
              style={{ borderRadius: ".75rem" }}
            >
              <MDBTypography blockquote>
                <MDBIcon
                  far
                  icon="gem mb-4"
                  size="lg"
                  style={{ color: "#f9a169" }}
                />
                <p>
                  <MDBIcon
                    fas
                    icon="angle-double-left"
                    style={{ color: "#f9a169" }}
                  />
                  <span className="lead font-italic">
                    I have not failed. I've just found 10,000 ways that won't
                    work.
                  </span>
                  <MDBIcon
                    fas
                    icon="angle-double-right"
                    style={{ color: "#f9a169" }}
                  />
                </p>
              </MDBTypography>
              <figcaption className="blockquote-footer mb-0">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </MDBCol>

          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <figure
              className="text-center bg-white py-5 px-4 shadow-2"
              style={{ borderRadius: ".75rem" }}
            >
              <MDBTypography blockquote>
                <MDBIcon
                  far
                  icon="gem mb-4"
                  size="lg"
                  style={{ color: "#f36f63" }}
                />
                <p>
                  <MDBIcon
                    fas
                    icon="angle-double-left"
                    style={{ color: "#f36f63" }}
                  />
                  <span className="lead font-italic">
                    I have not failed. I've just found 10,000 ways that won't
                    work.
                  </span>
                  <MDBIcon
                    fas
                    icon="angle-double-right"
                    style={{ color: "#f36f63" }}
                  />
                </p>
              </MDBTypography>
              <figcaption className="blockquote-footer mb-0">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
