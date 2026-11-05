import React from 'react';
import { QRCode } from 'react-qrcode-logo';

import "./Engraving.css";

/*
  https://gist.github.com/yanak/cda9884466097eaf54ef73219e6e4a17

  Generate random sha256 cryptographic hash;
  head -n 4096 /dev/urandom | shasum -a 256 | awk '{ print $1}'

  Example;
  b25060187493a70762a3902540801a686c30f800bbea202986aeb51c5e6cafba
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
      <h2>Engraving</h2>
      <p>{JSON.stringify(engraving)}</p>
      {console.log(JSON.stringify(engraving))}
    </div>
  )
}
