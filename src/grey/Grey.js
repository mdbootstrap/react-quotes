import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Grey() {
  return (
    <section className="vh-100 bg-light">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="5">
            <figure
              className="bg-light p-4"
              style={{
                borderLeft: ".35rem solid #fcdb5e",
                borderTop: "1px solid #eee",
                borderRight: "1px solid #eee",
                borderBottom: "1px solid #eee",
              }}
            >
              <MDBIcon fas icon="quote-left mb-4" size="2x" style={{color: '#fcdb5e'}} />
              <MDBTypography blockquote>
                <p className="pb-2">
                  Your time is limited, so don't waste it living someone else's
                  life. Don't be trapped by dogma - which is living with the
                  results of other people's thinking. Don't let the noise of
                  others' opinions drown out your own inner voice. And most
                  important, have the courage to follow your heart and
                  intuition.
                </p>
              </MDBTypography>
              <figcaption className="blockquote-footer mb-0">
                Steve Jobs in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
