import Linegraph from './Linegraph';
export default function TransactionRates() {
  return (
    <div className="bg-white my-4 p-4 font-poppins rounded-lg mx-4 mt-4 mb-0 h-[360px]">
      <div className="flex flex-row gap-8 place-content-start items-center my-4 ">
        <p className="font-semibold text-sm ">Transaction Rates</p>
        <p>|</p>
        <ul className="flex gap-8 font-normal text-xs list-disc ">
          <li>Approved</li>
          <li>Failed</li>
          <li>Pending </li>
        </ul>
        <p>|</p>
        <p className="font-normal text-xs flex gap-2">
          Inbound Transaction <img src="./smallestChevron_ic.svg" alt="" />
        </p>
      </div>
      <Linegraph />
    </div>
  );
}
