import React from "react";
import "./../../StyleComponent/Container1/DispCode.css";
function DispCode() {
  return (
    <div className="DispCode">
      <pre>
        {`   switch (matrixType) {
            case "ket0":
                return [[1], [0]];
            case "ket1":
                return [[0], [1]];
            case "paulix":
                return [[0, 1], [1, 0]];
            case "pauly":
                return [[0, -1], [1, 0]];
            case "pauliz":
                return [[1, 0], [0, -1]];
            case "hadamard":
                return [[0.707, 0.707], [0.707, -0.707]];
            default:
                return null;`}
      </pre>
    </div>
  );
}

export default DispCode;
