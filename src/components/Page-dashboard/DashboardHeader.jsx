export default function DashboardHeader() {
  return (
    <div className=" text-[#464255] font-poppins mx-4 ">
      <h2 className="text-4xl font-semibold my-0">Dashboard</h2>
      <div className="my-0 flex flex-row justify-between items-center">
        <p className="my-0 mt-0">Realtime Insight on various transactions</p>
        <button className=" text-sm bg-transparent rounded-lg border py-2 px-4 flex font-semibold text-[#464255]">
          All banks
          <img
            src="./ic_chevron_small.svg"
            alt=""
            className="relative top-[4px]"
          />
        </button>
      </div>
    </div>
  );
}
