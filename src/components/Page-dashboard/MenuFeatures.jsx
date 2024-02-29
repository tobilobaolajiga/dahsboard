import { Link } from 'react-router-dom';

export default function MenuFeatures() {
  return (
    <div className="flex flex-col place-items-center my-[16px] font-poppins gap-6 sticky">
      <Link to="/">
        <div className="flex flex-col items-center">
          <img src="/Home.svg" alt="" width={22} height={24} />
          <p className="text-[10px] text-center font-bold text-orange-600">
            Dashboard
          </p>
        </div>
      </Link>

      <Link to="/users">
        <div className="flex flex-col items-center">
          <img src="/user.svg" alt="" />
          <p className="text-[10px] text-center font-normal">User Management</p>
        </div>
      </Link>

      <Link to="/institutions">
        <div className="flex flex-col items-center">
          <img src="/inst.svg" alt="" />
          <p className="text-[10px] text-center font-normal">
            Institution Management
          </p>
        </div>
      </Link>
      <Link to="/transactions">
        <div className="flex flex-col items-center">
          <img src="/trans.svg" alt="" />
          <p className="text-[10px] text-center font-normal">
            Transaction Report
          </p>
        </div>
      </Link>
      <Link to="/settings">
        <div className="flex flex-col items-center">
          <img src="/setting.svg" alt="" />
          <p className="text-[10px] text-center font-normal">Settings</p>
        </div>
      </Link>
    </div>
  );
}

{
  /* <div className="hover:bg-zinc-50">
<img src="./dashboard.svg" alt="" className="mb-6" />
</div>

<div>
<img src="./userManagement.svg" alt="" className="mb-6" />
</div>

<div>
<img src="./institutionManagement.svg" alt="" className="mb-6" />
</div>

<div>
<img src="./transactionManagement.svg" alt="" className="mb-6" />
</div>

<div>
<img src="./settings.svg" alt="" className="mb-6" />
</div> */
}
