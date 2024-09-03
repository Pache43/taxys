export function Konto({ kontoData }) {
  const { kontoName, kontoNummer, soll, haben } = kontoData;

  const numberFormatter = new Intl.NumberFormat("de-DE", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let sumSoll = soll.reduce((acc, entry) => acc + entry.amount, 0);
  let sumHaben = haben.reduce((acc, entry) => acc + entry.amount, 0);
  const saldo = sumSoll - sumHaben;

  if (saldo < 0) {
    sumSoll += Math.abs(saldo); // Adjust Soll sum if saldo is negative
  } else if (saldo > 0) {
    sumHaben += saldo; // Adjust Haben sum if saldo is positive
  }

  return (
    <div className="flex flex-col items-center bg-slate-200">
      <div>
        <strong>
          {kontoName} ({kontoNummer}){" "}
        </strong>
      </div>
      <div className="flex flex-col divide-y divide-black">
        <div className="flex flex-row ">
          <span className="w-64">Soll</span>
          <span className="w-64 text-right">Haben</span>
        </div>
        <div className="flex flex-row divide-x divide-black ">
          <div className="w-64">
            {soll.map((entry, index) => (
              <div key={index} className="flex justify-between">
                <span>{entry.description}</span>
                <span>{numberFormatter.format(entry.amount)}</span>
              </div>
            ))}
            {saldo < 0 && (
              <div className="flex justify-between">
                <span>Saldo</span>
                <span>{numberFormatter.format(Math.abs(saldo))}</span>
              </div>
            )}
          </div>
          <div className="w-64 text-right">
            {haben.map((entry, index) => (
              <div key={index} className="flex justify-between">
                <span>{entry.description}</span>
                <span>{numberFormatter.format(entry.amount)}</span>
              </div>
            ))}
            {saldo > 0 && (
              <div className="flex justify-between">
                <span>Saldo</span>
                <span>{numberFormatter.format(Math.abs(saldo))}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row divide-x divide-black ">
          <div className="w-64">
            <div className="flex justify-between">
              <span>Summe</span>
              <span>{numberFormatter.format(sumSoll)}</span>
            </div>
          </div>
          <div className="w-64 text-right">
            <div className="flex justify-between">
              <span>Summe</span>
              <span>{numberFormatter.format(sumHaben)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
