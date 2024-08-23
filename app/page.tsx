import Image from "next/image";
import { Konto } from "./ui/konto";

export default function Home() {
  const kontoData = {
    kontoNummer: "Konto 1",
    soll: 5000,
    haben: 5000,
  };

  return (
    <main className="flex justify-center w-screen h-screen p-4">
      <div className="w-11/12 h-1/2 bg-slate-500">
        <Konto kontoData={kontoData}></Konto>
      </div>
    </main>
  );
}
