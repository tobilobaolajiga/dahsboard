export default function UsersHeader() {
  return (
    <div className=" text-[#464255] font-poppins mx-4 ">
      <h2 className="text-4xl font-semibold my-0">Institution Management</h2>
      <div className="my-0 flex flex-row justify-between items-center">
        <p className="my-0 mt-0">
          Create and manage institutions in realtime across the system
        </p>
        <button className=" text-sm bg-transparent rounded-lg border py-2 px-4 flex font-semibold text-[#464255]">
          New user
        </button>
      </div>
    </div>
  );
}
