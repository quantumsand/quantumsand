import { Deck, Slide, Heading, Box, FlexBox, FullScreen, Progress, Image, CodePane, Appear, Stepper } from 'spectacle';
import { useEffect } from 'react';
import VSDark from 'react-syntax-highlighter/dist/cjs/styles/prism/vs-dark';
import { MathJaxProvider } from 'mathjax3-react';
import PresentationMathematics from './PresentationMathematics';
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

  const channel = new BroadcastChannel("spectacle_presenter_bus");
  var stepIndex = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {

      // var randomNumber = Math.floor(Math.random() * (3 - 0 + 1))
      if (stepIndex < 3) {
      stepIndex = stepIndex + 1;
      }
      else {
        stepIndex = 0;
      }
      // console.log("random: " + randomNumber)

      channel.postMessage(JSON.stringify({
        type: "SYNC",
        payload: {
          slideIndex: 0,
          stepIndex: stepIndex
        }
      }));
    }, 2500);

    return () => clearInterval(intervalId); //This is important
  })


  return (
    <div className="presentationSlides">
      <Deck theme={theme}>
      {slides.map((slide, index) => (
        <Slide key={slide.id} backgroundColor={slide.backgroundColor}>
          {/* <Heading>{slide.heading}</Heading> */}
          {slide.image &&
            <Image src={slide.image} height="100vh"></Image>
          }

          {slide.code && <CodePane language="rust" theme={VSDark} highlightRanges={slide.codeRanges}>
            {slide.code}
          </CodePane>}

          {slide.mathematics && <FlexBox flex={1} flexDirection='column' justifyContent='center'>
            <MathJaxProvider options={{
                tex: {
                  inlineMath: [
                    ['$', '$'],
                    ['\\(', '\\)'],
                  ],
                },
              }}>

            {slide.mathematics.map((math, index) => (
              <Stepper key={index} tagName="div" alwaysVisible values={['complete']}>
              {(value, step, isActive) => 

                <PresentationMathematics text="" tex={math.tex} highlighted={isActive} />

              }
              </Stepper>
            ))}
            </MathJaxProvider>
          </FlexBox>
          }
        </Slide>
      ))}
      </Deck>
      </div>
  )
}

