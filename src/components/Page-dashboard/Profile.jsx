export default function Profile() {
  return (
    <div className="flex place-items-center gap-4 ml-12 mb-4">
      <div className="rounded-full">
        <img src="./ProfilePic.svg" alt="" className="rounded-full" />
      </div>

      <div className="font-poppins ">
        <p
          className="font-semibold text-xs text-[#0A0A1F]
"
        >
          Joshua Omonigho
        </p>
        <p
          className=" flex text-[10px] mt-[4px] text-[#0A0A1F]
"
        >
          UP Admin <img src="./ic_chevron_small.svg" alt="" />
        </p>
      </div>
    </div>
  );
}
