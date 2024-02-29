import ColumnBar from './ColumnBar';
export default function Barchart() {
  return (
    <div className="font-poppins bg-white mt-4 mr-4 px-4 py-8 rounded-lg h-[270px]">
      <div className="flex  place-items-center  gap-4 ">
        <p className="text-sm font-semibold">Transaction Analysis</p>
        <p>|</p>
        <p className="text-xs font-normal flex gap-[4px] justify-center">
          Inbound Transaction
          <img
            src="./smallestChevron_ic.svg"
            alt=""
            className="w-[8px] h-[12px]"
          />
        </p>
      </div>
      <ColumnBar />
    </div>
  );
}
