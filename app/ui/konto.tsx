export function Konto({ kontoData }) {
  const { kontoNummer, soll, haben } = kontoData;

  return (
    <div className="flex flex-col items-center bg-slate-200 w-44">
      <div>{kontoNummer}</div>
      <div className="flex flex-col w-full divide-y divide-black">
        <div className="flex flex-row divide-x divide-black ">
          <span className="w-1/2">Soll</span>
          <span className="w-1/2 text-right">Haben</span>
        </div>
        <div className="flex flex-row divide-x divide-black ">
          <div className="w-1/2">{soll}</div>
          <div className="w-1/2 text-right">{haben}</div>
        </div>
      </div>
    </div>
  );
}
