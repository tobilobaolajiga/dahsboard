import Logo from '../Page-dashboard/Logo';
import Mode from '../Page-dashboard/Mode';
import { Link } from 'react-router-dom';
export default function TransactionMenu() {
  return (
    <div className="w-[100px] px-4 mx-[14px] flex flex-col place-items-center justify-between h-full">
      <Logo />
      <div className="flex flex-col h-full justify-between items-center">
        <div className="flex flex-col place-items-center my-[16px] font-poppins gap-6">
          <Link to="/">
            <div className="flex flex-col items-center">
              <img src="/dash-home.svg" alt="" width={22} height={24} />
              <p className="text-[10px] text-center font-normal ">Dashboard</p>
            </div>
          </Link>

          <Link to="/users">
            <div className="flex flex-col items-center">
              <img src="/user.svg" alt="" />
              <p className="text-[10px] text-center font-normal">
                User Management
              </p>
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
              <img src="/coloredTrans.svg" alt="" />
              <p className="text-[10px] text-center font-bold text-orange-600">
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
        <Mode />
      </div>
    </div>
  );
}
