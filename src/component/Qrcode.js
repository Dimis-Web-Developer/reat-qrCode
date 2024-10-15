import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas-pro";

function Qrcode() {
  const [text, setText] = useState("");
  const qrRef = useRef(null);

  const downloadQRCode = () => {
    const qrElement = qrRef.current;
    html2canvas(qrElement).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "qrcode.png";
      link.click();
    });
  };

  return (
    <div className="container">
      <div ref={qrRef}>
        <QRCode value={text || "default"} title="QR Generator" size={256} />
      </div>

      <div className="input">
        <input
          type="text"
          placeholder="Enter text"
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <button onClick={downloadQRCode}>Download QR Code</button>
    </div>
  );
}

export default Qrcode;
