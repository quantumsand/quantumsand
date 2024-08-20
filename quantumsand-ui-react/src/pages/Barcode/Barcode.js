import React from 'react';
import { QRCode } from 'react-qrcode-logo';

import "./Barcode.css";

export default function Barcode({ url = "qalb://mathematics/lesson/1",
	                                logo = "/icons/coracaozinho-para-o-luiz-otavio-white.svg"}) {
  return (
    <div className="barcode">
      <QRCode value={url}
        size="160"
        bgColor="transparent"
        fgColor="#000"
        logoImage={logo}
        logoWidth="128"
        logoOpacity="0.3"
        eyeColor={[
          '#c6201d',  // top/left eye
          '#c6201d', // top/right eye
          '#c6201d',  // bottom/left eye
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
  )
}
