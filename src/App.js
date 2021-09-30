import React, { useState } from "react";

import "./styles.css";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [cashGiven, setCashGiven] = useState(0);
  const [output, setOutput] = useState("");
  const [color, setColor] = useState("black");
  const [change, setChange] = useState([0, 0, 0, 0, 0, 0, 0]);

  const calculate = () => {
    if (!billAmount || !cashGiven) {
      alert("Some input was empty or set to 0");
      setOutput("Some input was empty or set to 0");
      return;
    }
    if (cashGiven < billAmount) {
      setOutput("Oh! You don't have enough money");
      setChange([0, 0, 0, 0, 0, 0, 0]);
      setColor("red");
      return;
    }
    setOutput("");

    let difference = cashGiven - billAmount;
    let changes = [0, 0, 0, 0, 0, 0, 0];

    console.log(difference % 1);

    if (difference >= 2000) {
      changes[0] = Math.floor(difference / 2000);
      difference -= changes[0] * 2000;
    }
    if (difference >= 500) {
      changes[1] = Math.floor(difference / 500);
      difference -= changes[1] * 500;
    }
    if (difference >= 100) {
      changes[2] = Math.floor(difference / 100);
      difference -= changes[2] * 100;
    }
    if (difference >= 20) {
      changes[3] = Math.floor(difference / 20);
      difference -= changes[3] * 20;
    }
    if (difference >= 10) {
      changes[4] = Math.floor(difference / 10);
      difference -= changes[4] * 10;
    }
    if (difference >= 5) {
      changes[5] = Math.floor(difference / 5);
      difference -= changes[5] * 5;
    }
    if (difference >= 1) {
      changes[6] = Math.floor(difference / 1);
      difference -= changes[6] * 1;
    }

    console.log(changes);

    setChange(changes);
    setColor("red");
    return;
  };

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Cash Register Manager</h1>
      <h2>
        {
          "Enter the bill amount and cash given by the customer and know minimum number of notes to return"
        }
      </h2>
      <br />
      <h3>Bill Amount</h3>
      <input
        value={billAmount}
        onChange={(e) => setBillAmount(parseInt(e.target.value))}
        type="number"
      />
      <h3>Cash Given</h3>
      <input
        value={cashGiven}
        onChange={(e) => setCashGiven(parseInt(e.target.value))}
        type="number"
      />
      <div>
        <button onClick={calculate}>Calculate</button>
      </div>
      <div style={{ color }}>{output}</div>
      <br />
      <h3>Return change</h3>
      <table>
        <tbody>
          <tr>
            <td>No of Notes </td>
            {change.map((c) => (
              <td>{c}</td>
            ))}
          </tr>
          <tr>
            <td>Note</td>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />© | 2021 | Gauri
    </div>
  );
}

export default App;
