import React from 'react';
import { MathJaxProvider, MathJaxFormula } from 'mathjax3-react';

import "./PresentationMathematics.css";

export default function PresentationMathematics({ tex, text, highlighted }) {

  return (
    <div className={highlighted ? `presentation__mathematics presentation__mathematicsHighlighted` : `presentation__mathematics`}>

      <MathJaxFormula formula={tex} />
     
      {/* {console.log(tex)}
      {console.log(text)}
      {console.log(highlighted)} */}
      <div className={highlighted ? `presentation__mathematicsText presentation__mathematicsTextHighlighted` : `presentation__mathematicsText`}>{text}</div>
    </div>
  )
}
