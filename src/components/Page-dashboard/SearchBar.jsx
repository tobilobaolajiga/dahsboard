export default function SearchBar() {
  return (
    <div>
      <div className="flex place-items-center">
        <input
          type="text"
          placeholder="Search for institutions, users, transactions..."
          className="border-none outline-none w-[800px] h-[50px] font-poppins font-normal text-base tracking-wide pl-[80px] placeholder:text-slate-300 my-6 mx-4 rounded-md"
        />
        <button className="rounded-lg border w-[120px] h-[50px] bg-transparent mr-4 flex place-items-center m-auto justify-center">
          <img src="./event_note.svg" alt="" className="m-2" />
          <p className="font-medium text-[#464255] text-sm">Today</p>
          <img src="./ic_chevron.svg" alt="" className="m-2" />
        </button>
      </div>
    </div>
  );
}
