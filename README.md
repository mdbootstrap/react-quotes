Responsive React Quotes built with Bootstrap 5. HTML & CSS. Quote boxes with quote symbol, blockquotes, quote carousel slider, various quote styles with HTML & CSS.

Check out [React Bootstrap Quotes Documentation](https://mdbootstrap.com/docs/react/extended/quotes/) for detailed instructions & even more examples.

## Basic example

![React Bootstrap 5 Quotes](https://mdbootstrap.com/img/Marketing/github/quotes/basic.png)

```jsx
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function QuoteCarosuel() {
  return (
    <section className="vh-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol xl="10">
            <MDBCard>
              <MDBCardBody className="py-5">
                <MDBCarousel showControls showIndicators dark>
                  <MDBCarouselInner>
                    <MDBCarouselItem className="active" tag="div">
                      <MDBRow className="justify-content-center">
                        <MDBCol md="8" lg="9" xl="8">
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                className="rounded-circle mb-4 mb-lg-0 shadow-2"
                                alt="woman avatar"
                                width="90"
                                height="90"
                              />
                            </div>
                            <div className="flex-grow-1 ms-4 ps-3">
                              <figure>
                                <MDBTypography blockquote className="mb-4">
                                  <p>
                                    <MDBIcon
                                      fas
                                      icon="quote-left fa-lg text-warning me-2"
                                    />
                                    <span className="font-italic">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Pariatur sint nesciunt
                                      ad itaque aperiam expedita officiis
                                      incidunt minus facere, molestias quisquam
                                      impedit inventore.
                                    </span>
                                  </p>
                                </MDBTypography>
                                <figcaption className="blockquote-footer mb-0">
                                  Miranda Smith in{" "}
                                  <cite title="Source Title">The Guardian</cite>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCarouselItem>

                    <MDBCarouselItem tag="div">
                      <MDBRow className="justify-content-center">
                        <MDBCol md="8" lg="9" xl="8">
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-circle mb-4 mb-lg-0 shadow-2"
                                alt="woman avatar"
                                width="90"
                                height="90"
                              />
                            </div>
                            <div className="flex-grow-1 ms-4 ps-3">
                              <figure>
                                <MDBTypography blockquote className="mb-4">
                                  <p>
                                    <MDBIcon
                                      fas
                                      icon="quote-left fa-lg text-warning me-2"
                                    />
                                    <span className="font-italic">
                                      Sed ut perspiciatis unde omnis iste natus
                                      error sit voluptatem accusantium
                                      doloremque laudantium, totam rem aperiam,
                                      eaque ipsa quae ab illo inventore
                                      veritatis.
                                    </span>
                                  </p>
                                </MDBTypography>
                                <figcaption className="blockquote-footer mb-0">
                                  Annie Hall{" "}
                                  <cite title="Source Title">
                                    New York Times
                                  </cite>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCarouselItem>

                    <MDBCarouselItem tag="div">
                      <MDBRow className="justify-content-center">
                        <MDBCol md="8" lg="9" xl="8">
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                className="rounded-circle mb-4 mb-lg-0 shadow-2"
                                alt="woman avatar"
                                width="90"
                                height="90"
                              />
                            </div>
                            <div className="flex-grow-1 ms-4 ps-3">
                              <figure>
                                <MDBTypography blockquote className="mb-4">
                                  <p>
                                    <MDBIcon
                                      fas
                                      icon="quote-left fa-lg text-warning me-2"
                                    />
                                    <span className="font-italic">
                                      At vero eos et accusamus et iusto odio
                                      dignissimos qui blanditiis praesentium
                                      voluptatum deleniti atque corrupti quos
                                      dolores et quas molestias excepturi sint
                                      amet dolore.
                                    </span>
                                  </p>
                                </MDBTypography>
                                <figcaption className="blockquote-footer mb-0">
                                  Jason More in{" "}
                                  <cite title="Source Title">
                                    Smash Magazine
                                  </cite>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

```

```css
.gradient-custom {
  /* fallback for old browsers */
  background: #f6d365;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))
}
```

## How to use?

1. Download MDB React - free UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)

## More examples

[React Bootstrap Quotes #2:
![React Bootstrap 5 Quotes](https://mdbootstrap.com/img/Marketing/github/quotes/section-2.png)](https://mdbootstrap.com/docs/react/extended/quotes/#section-2)

[React Bootstrap Quotes #3:
![React Bootstrap 5 Quotes](https://mdbootstrap.com/img/Marketing/github/quotes/section-3.png)](https://mdbootstrap.com/docs/react/extended/quotes/#section-3)

[React Bootstrap Quotes #4:
![React Bootstrap 5 Quotes](https://mdbootstrap.com/img/Marketing/github/quotes/section-4.png)](https://mdbootstrap.com/docs/react/extended/quotes/#section-4)

[React Bootstrap Quotes #5:
![React Bootstrap 5 Quotes](https://mdbootstrap.com/img/Marketing/github/quotes/section-5.png)](https://mdbootstrap.com/docs/react/extended/quotes/#section-5)

[React Bootstrap Quotes #6:
![React Bootstrap 5 Quotes](https://mdbootstrap.com/img/Marketing/github/quotes/section-6.png)](https://mdbootstrap.com/docs/react/extended/quotes/#section-6)

[React Bootstrap Quotes #7:
![React Bootstrap 5 Quotes](https://mdbootstrap.com/img/Marketing/github/quotes/section-7.png)](https://mdbootstrap.com/docs/react/extended/quotes/#section-7)

[React Bootstrap Quotes #8:
![React Bootstrap 5 Quotes](https://mdbootstrap.com/img/Marketing/github/quotes/section-8.png)](https://mdbootstrap.com/docs/react/extended/quotes/#section-8)

[React Bootstrap Quotes #9:
![React Bootstrap 5 Quotes](https://mdbootstrap.com/img/Marketing/github/quotes/section-9.png)](https://mdbootstrap.com/docs/react/extended/quotes/#section-9)

[React Bootstrap Quotes #10:
![React Bootstrap 5 Quotes](https://mdbootstrap.com/img/Marketing/github/quotes/section-10.png)](https://mdbootstrap.com/docs/react/extended/quotes/#section-10)


___

## More extended Bootstrap documentation

<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/avatar/">React avatar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/carousel/">React carousel</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/cards/">React cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/content-styles/colors/">React colors</a></li>
<li><a href="https://mdbootstrap.com/docs/react/content-styles/icons/">React icons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/alerts/">React alerts</a></li>
<li><a href="https://mdbootstrap.com/docs/react/content-styles/typography/">React typography</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/buttons/">React buttons</a></li>
</ul>
