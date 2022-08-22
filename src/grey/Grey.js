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
          <MDBCol lg="10" xl="8">
            <figure className="note note-primary p-4">
              <MDBTypography blockquote>
                <p className="pb-2">
                  "If it's a good idea, go ahead and do it. It's much easier to
                  apologize than it is to get permission."
                </p>
              </MDBTypography>
              <figcaption className="blockquote-footer mb-0">
                Grace Hopper
              </figcaption>
            </figure>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
