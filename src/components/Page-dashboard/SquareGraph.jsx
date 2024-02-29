export default function SquareGraph(props) {
  return (
    <div>
      <div className=" bg-white mx-4 mb-2 w-[220px] h-[120px] rounded-lg font-poppins text-[#464255] pb-8 pt-2 px-4">
        <img
          src="./threeDots.svg"
          alt=""
          className="relative left-[140px] pt-2"
        />
        <p className="text-sm font-semibold mb-8 mt-4">{props.approvalStat}</p>

        <div className="flex justify-between place-items-center -my-6">
          <p className="font-semibold text-2xl mr-4">{props.figure}</p>
          <p className="text-xs font-normal flex gap-[4px]">
            {props.percent} <img src={props.arrow} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
}
// [#FFCBA2]
