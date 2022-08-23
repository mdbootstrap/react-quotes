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

export default function ColorfulQuote() {
  return (
    <section className="vh-100 bg-light">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="8">
            <MDBCard className="bg-primary text-white rounded-3 mb-3">
              <MDBCardBody>
                <figure className="mb-0">
                  <MDBTypography blockquote>
                    <p className="pb-2">
                      "If it's a good idea, go ahead and do it. It's much easier
                      to apologize than it is to get permission."
                    </p>
                  </MDBTypography>
                  <figcaption className="blockquote-footer mb-0 text-white">
                    Grace Hopper
                  </figcaption>
                </figure>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="bg-success text-white rounded-3 mb-3">
              <MDBCardBody>
                <figure className="mb-0">
                  <MDBTypography blockquote>
                    <p className="pb-2">
                      "Science and everyday life cannot and should not be
                      separated."
                    </p>
                  </MDBTypography>
                  <figcaption className="blockquote-footer mb-0 text-white">
                    Rosalind Franklin
                  </figcaption>
                </figure>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="bg-danger text-white rounded-3 mb-3">
              <MDBCardBody>
                <figure className="mb-0">
                  <MDBTypography blockquote>
                    <p className="pb-2">
                      "Science makes people reach selflessly for truth and
                      objectivity; it teaches people to accept reality, with
                      wonder and admiration, not to mention the deep awe and joy
                      that the natural order of things brings to the true
                      scientist."
                    </p>
                  </MDBTypography>
                  <figcaption className="blockquote-footer mb-0 text-white">
                    Lise Meitner
                  </figcaption>
                </figure>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
