'use client'
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [decimal1, setDecimal1] = useState("");
  const [binario1, setBinario1] = useState("");
  const [binario2, setBinario2] = useState("");
  const [complemento2, setComplemento2] = useState("");
  const [decimal3, setDecimal3] = useState("");
  const [hexadecimal3, setHexadecimal3] = useState("");

  // Add additional state variables for other conversions

  const handleDecimalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "decimal1":
        setDecimal1(event.target.value);
        setBinario1(parseInt(event.target.value, 10).toString(2));
        break;
      case "binario2":
        setBinario2(event.target.value);
        let complementoInput = event.target.value;
        let complementoNashe = "";
        complementoInput.split("").forEach(e => {
          switch (e){
            case "0":
              complementoNashe += "1";
              break;
            case "1":
              complementoNashe += "0";
              break;
          }
        });
        setComplemento2((parseInt(complementoNashe, 2) + 1).toString(2));
        break;
      case "decimal3":
        setDecimal3(event.target.value)
        setHexadecimal3(parseInt(event.target.value, 10).toString(16).toUpperCase());
        break;
      case "hexadecimal3":
        setHexadecimal3(event.target.value);
        setDecimal3(parseInt(event.target.value.toLowerCase(), 16).toString(10));
        break;
      default:
        
    }

  };

  // Add similar functions for other conversions with different logic

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Container 1 */}
      {/* Add similar structure with necessary functions and state variables */}
      <div className="flex flex-col w-full gap-12">
        <div className="bg-zinc-900 shadow rounded-lg p-4 flex flex-col gap-4">
          <h3 className="font-bold text-lg">Decimal → Binario</h3>
          <div className="flex flex-col gap-2">
            <label htmlFor="decimal1">Decimal:</label>
            <input
              id="decimal1"
              type="text"
              className="bg-zinc-700 border p-2 rounded-md"
              onChange={handleDecimalChange}
              value={decimal1}
            />
            <label htmlFor="binario1">Binario:</label>
            <input
              id="binario1"
              type="text"
              className="bg-zinc-700 border p-2 rounded-md readonly"
              readOnly
              value={binario1}
            />
          </div>
        </div>
      </div>

      {/* Container 2 */}
      {/* Add similar structure with necessary functions and state variables */}
      <div className="flex flex-col w-full gap-12">
        <div className="bg-zinc-900 shadow rounded-lg p-4 flex flex-col gap-4">
          <h3 className="font-bold text-lg">Binario → Complemento 2</h3>
          <div className="flex flex-col gap-2">
            <label htmlFor="binario2">Binario:</label>
            <input
              id="binario2"
              type="text"
              className="bg-zinc-700 border p-2 rounded-md"
              onChange={handleDecimalChange}
              value={binario2}
            />
            <label htmlFor="complemento2">Binario:</label>
            <input
              id="complemento2"
              type="text"
              className="bg-zinc-700 border p-2 rounded-md readonly"
              readOnly
              value={complemento2}
            />
          </div>
        </div>
      </div>
      {/* Container 3 */}
      {/* Add similar structure with necessary functions and state variables */}
      <div className="flex flex-col w-full gap-12">
        <div className="bg-zinc-900 shadow rounded-lg p-4 flex flex-col gap-4">
          <h3 className="font-bold text-lg">Decimal ←→ Hexadecimal</h3>
          <div className="flex flex-col gap-2">
            <label htmlFor="decimal3">Decimal:</label>
            <input 
              id="decimal3"
              type="text"
              className="bg-zinc-700 border p-2 rounded-md"
              onChange={handleDecimalChange}
              value={decimal3}
            />
            <label htmlFor="hexadecimal3">Hexadecimal:</label>
            <input
              id="hexadecimal3"
              type="text"
              className="bg-zinc-700 border p-2 rounded-md"
              onChange={handleDecimalChange}
              value={hexadecimal3}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
