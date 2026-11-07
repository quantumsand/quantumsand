import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import "./Engraving.css";

/*
  https://gist.github.com/yanak/cda9884466097eaf54ef73219e6e4a17

  Generate random sha256 cryptographic hash;
  head -n 4096 /dev/urandom | shasum -a 256 | awk '{ print $1}'

  Example;
  b25060187493a70762a3902540801a686c30f800bbea202986aeb51c5e6cafba
*/

/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_space_argument

  JSON.stringify(value, replacer, space)

  `space` is a string or number to insert white space into the output JSON string.

  Using the argument `2` or `  `; will add two spaces of indentation;

  JSON.stringify(engraving, null, 2)
*/

export default function Engraving({ engraving = {
                                                  id: "b25060187493a70762a3902540801a686c30f800bbea202986aeb51c5e6cafba",
                                                  type: "dinar",
                                                  value: "1",
                                                  purity: "22 carat",
                                                  mass: "4.25g",
                                                  geospatial: {
                                                    name: "Makkah",
                                                    long: 39.8579,
                                                    lat: 21.3891
                                                  },
                                                  date: "20270601"
                                                }}) {
  return (
    <div className="engraving">
      <img src="/icons/dinar.svg" alt="" style={{background: "#000", borderRadius: "50%", width: "180px" }} />
      <div className="engravingBarcode">
        <QRCode value={JSON.stringify(engraving)}
          size="160"
          bgColor="transparent"
          fgColor="#000"
          eyeColor={[
            '#000',  // top/left eye
            '#000', // top/right eye
            '#000',  // bottom/left eye
          ]}
          eyeRadius={[
            { // top/left eye
              outer: [10, 10, 0, 10],
              inner: [0, 10, 10, 10],
            },
            [10, 10, 10, 0], // top/right eye
            [10, 0, 10, 10], // bottom/left
          ]}
          qrStyle="dots" />
      </div>
      <h3>Engraving</h3>
      <SyntaxHighlighter language="javascript" style={atelierLakesideLight}>
        {JSON.stringify(engraving, null, 2)}
      </SyntaxHighlighter>
      {console.log(JSON.stringify(engraving, null, 2))}
    </div>
  )
}
