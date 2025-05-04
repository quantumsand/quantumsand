import { Deck, Slide, Heading, Box, FlexBox, FullScreen, Progress, Image, CodePane, Appear, Stepper } from 'spectacle';
import "./PresentationSlides.css";

export default function PresentationSlides({ slides = [
  {
    id: 1,
    content: "Advertise here.",
    image: "/images/qalb-boy-experimental.svg",
    backgroundColor: "#fff"
   },
  {id: 2, content: "Advertise here.", image: "/images/photo-1494412519320-aa613dfb7738.jpeg"}] }){

  const theme = {
    colors: {
      primary: 'whitesmoke',
      secondary: '#2a2c37'
    },
    fontSizes: {
      header: '64px',
      paragraph: '28px',
      monospace: '24px'
    }
  };

  return (
    <div className="presentationSlides">
      <Deck theme={theme}>
      {slides.map((slide, index) => (
        <Slide key={slide.id} backgroundColor={slide.backgroundColor}>
          {/* <Heading>{slide.heading}</Heading> */}
          {slide.image &&
            <Image src={slide.image} height="100vh"></Image>
          }
        </Slide>
      ))}
      </Deck>
      </div>
  )
}

