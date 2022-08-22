import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="text-center">
      <Link to="/quote-carosuel">
        <MDBBtn className="m-3">
          Quote Carosuel
        </MDBBtn>
      </Link>
      <Link to="/blockquote">
        <MDBBtn className="m-3">
          blockquote
        </MDBBtn>
      </Link>
      <Link to="/blockquote-with-image">
        <MDBBtn className="m-3">
          blockquote with image
        </MDBBtn>
      </Link>
      <Link to="/blockquote-with-icon">
        <MDBBtn className="m-3">
          blockquote with icon
        </MDBBtn>
      </Link>
      <Link to="/square-quoteboxes">
        <MDBBtn className="m-3">
          Square quoteboxes
        </MDBBtn>
      </Link>
      <Link to="/quoteboxes">
        <MDBBtn className="m-3">
          quoteboxes
        </MDBBtn>
      </Link>
      <Link to="/quotebox-with-likes-counter">
        <MDBBtn className="m-3">
          Quotebox with likes counter
        </MDBBtn>
      </Link>
      <Link to="/grey">
        <MDBBtn className="m-3">
          Grey Quote
        </MDBBtn>
      </Link>
    </MDBContainer>
  );
}