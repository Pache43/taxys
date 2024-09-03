import { Konto } from "./ui/konto";

export default function Home() {
  const konto1 = {
    kontoName: "Kassa",
    kontoNummer: 28000,
    soll: [
      { description: "Buchung 1", amount: 5000 },
      { description: "Buchung 2", amount: 500 },
    ],
    haben: [
      { description: "Buchung 3", amount: 2000 },
      { description: "Buchung 4", amount: 1500 },
    ],
  };

  return (
    <main className="flex justify-center w-screen h-screen p-4">
      <div
        className="grid justify-center w-11/12 h-1/2 bg-slate-500 gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, 640px)" }}
      >
        <Konto kontoData={konto1}></Konto>
      </div>
    </main>
  );
}
