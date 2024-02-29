import SquareGraph from '../Page-dashboard/SquareGraph';
export default function GraphsTransactions() {
  return (
    <div className="flex mt-4">
      <div className=" bg-[#FFCBA2] mx-4 mb-2 w-[220px] h-[120px] rounded-lg font-poppins text-[#464255] pb-8 pt-2 px-4">
        <img
          src="./threeDots.svg"
          alt=""
          className="relative left-[140px] pt-2"
        />
        <p className="text-sm font-semibold mb-8 mt-4">Total Transactions</p>

        <div className="flex justify-between place-items-center -my-6">
          <p className="font-semibold text-2xl mr-4">3,781</p>
          <p className="text-xs font-normal flex gap-[4px]">
            +5.27% <img src="./ArrowRise.svg" alt="" />
          </p>
        </div>
      </div>
      <SquareGraph
        approvalStat="Failed Transactions"
        figure="1,219"
        percent="-1.78%"
        arrow="./ArrowFall.svg"
      />
      <div className=" bg-[#A9E9FF] mx-4 mb-2 w-[220px] h-[120px] rounded-lg font-poppins text-[#464255] pb-8 pt-2 px-4">
        <img
          src="./threeDots.svg"
          alt=""
          className="relative left-[140px] pt-2"
        />
        <p className="text-sm font-semibold mb-8 mt-4">Approved Transactions</p>

        <div className="flex justify-between place-items-center -my-6">
          <p className="font-semibold text-2xl mr-4">3,219</p>
          <p className="text-xs font-normal flex gap-[4px]">
            +1.48% <img src="public\ArrowRise.svg" alt="" />
          </p>
        </div>
      </div>
      <SquareGraph
        approvalStat="Pending Transactions"
        figure="695"
        percent="-0.56%"
        arrow="./ArrowFall.svg"
      />
    </div>
  );
}
