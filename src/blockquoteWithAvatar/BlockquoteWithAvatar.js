import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";

export default function BlockquoteWithAvatar() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#CDC4F9" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" xl="8">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-5">
                <div className="d-flex justify-content-center mb-4">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(28).webp"
                    className="rounded-circle shadow-1-strong"
                    width="100"
                    height="100"
                  />
                </div>
                <figure className="mb-0 text-center">
                  <MDBTypography blockquote className="mb-4">
                    <p>
                      <span className="font-italic">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur sint nesciunt ad itaque aperiam expedita
                        officiis incidunt minus facere molestias inventore.
                      </span>
                    </p>
                  </MDBTypography>
                  <figcaption className="blockquote-footer mb-0">
                    Kate Williams in <cite title="Source Title">Vogue</cite>
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
