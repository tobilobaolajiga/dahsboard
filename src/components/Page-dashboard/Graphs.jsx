import SquareGraph from './SquareGraph';
import Barchart from './Barchart';
import TransactionRates from './TransactionRates';
import DowntimeIndicator from './DowntimeIndicator';
export default function Graphs() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 w-[470px] h-[300px] gap-0 grid-auto-rows mt-4">
          <div className=" bg-[#FFCBA2] mx-4 mb-2 w-[220px] h-[120px] rounded-lg font-poppins text-[#464255] pb-8 pt-2 px-4">
            <img
              src="./threeDots.svg"
              alt=""
              className="relative left-[140px] pt-2"
            />
            <p className="text-sm font-semibold mb-8 mt-4">Approved</p>

            <div className="flex justify-between place-items-center -my-6">
              <p className="font-semibold text-2xl mr-4">3,781</p>
              <p className="text-xs font-normal flex gap-[4px]">
                +5.27% <img src="./ArrowRise.svg" alt="" />
              </p>
            </div>
          </div>
          <SquareGraph
            approvalStat="Failed"
            figure="3,219"
            percent="-1.78%"
            arrow="./ArrowFall.svg"
          />
          <SquareGraph
            approvalStat="Pending"
            figure="3,000"
            percent="-0.56%"
            arrow="./ArrowFall.svg"
          />
          <div className=" bg-[#A9E9FF] mx-4 mb-2 w-[220px] h-[120px] rounded-lg font-poppins text-[#464255] pb-8 pt-2 px-4">
            <img
              src="./threeDots.svg"
              alt=""
              className="relative left-[140px] pt-2"
            />
            <p className="text-sm font-semibold mb-8 mt-4">Approval Rate</p>

            <div className="flex justify-between place-items-center -my-6">
              <p className="font-semibold text-2xl mr-4">30.1%</p>
              <p className="text-xs font-normal flex gap-[4px]">
                +1.48% <img src="public\ArrowRise.svg" alt="" />
              </p>
            </div>
          </div>
        </div>
        <Barchart />
      </div>
      <div className="grid grid-cols-4 ">
        <div className="col-span-3">
          <TransactionRates />
        </div>
        <div>
          <DowntimeIndicator />
        </div>
      </div>
    </div>
  );
}
