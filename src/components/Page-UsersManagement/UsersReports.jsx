import UsersReport from './UsersReport';
import { useState } from 'react';
import UserCreationModal from './UserCreationModal';
export default function UsersReports() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
    const body = document.querySelector('#body');
    setModal((body.style.position = 'fixed'));
  };

  const closeModal = () => {
    setModal(!modal);
    const body = document.querySelector('#body');
    setModal((body.style.position = ''));
  };
  return (
    <div className="bg-zinc-50 p-4 font-poppins text-xs w-[1230px]">
      <div className="bg-white m-2 p-4 id=" id="body">
        <div className="flex justify-between items-center">
          <ul className="flex gap-4 items-center">
            <li
              className="flex gap-2 items-center border-r pr-4 cursor-pointer"
              onClick={openModal}
            >
              <img src="/plussign.svg" alt="" width={30} height={28} /> New User
            </li>

            <li>
              <img src="/levels.svg" alt="" />
            </li>
            <li className=" border-r pr-4">
              <img src="/arrows.svg" alt="" />
            </li>
            <li className="flex gap-2 items-center">
              <img src="/plussign.svg" alt="" width={30} height={28} />
              Export Users Report
              <img src="/ic_chevron.svg" alt="" width={15} height={12} />
            </li>
          </ul>
          <ul className="flex gap-4 items-center mr-2">
            <li className="border-l pl-4 py-2">2 Selected</li>
            <li>
              <img src="/Bin.svg" alt="" width={28} height={28} />
            </li>
            <li>
              <img src="/threeDots.svg" alt="" />
            </li>
          </ul>
        </div>

        <div>
          <div className="border-b border-slate-200 m-2">
            <ul className="list-none flex font-poppins text-xs text-black opacity-40 justify-start items-center text-justify mt-4">
              <li className="border-r-2 p-2 w-[80px] h-[40px]">User ID</li>
              <li className="border-r-2 p-2 w-[220px] h-[40px]">User Name</li>
              <li className="border-r-2 p-2 w-[200px] h-[40px]">User Role</li>
              <li className="border-r-2 p-2 w-[297px] h-[40px]">
                Email Address
              </li>
              <li className="border-r-2 p-2 w-[180px] h-[40px]">
                Date Created
              </li>
              <li className=" p-2 w-[138px] h-[40px]">User Status</li>
            </ul>
          </div>
          <UsersReport
            id="#CM9801"
            userImg="/kate.svg"
            name="Kate Morrison"
            role="Admin Role"
            address="Kate.morrison@payarena.com"
            dateCreated="Just now"
            userStat="./underReview.svg"
          />
          <UsersReport
            id="#CM9802"
            userImg="/korey.svg"
            name="Koray Okumus"
            role="Admin Role"
            address="Koray.okumus@payarena.com"
            dateCreated="A minute ago"
            userStat="./active.svg"
          />
          <UsersReport
            id="#CM9803"
            userImg="/Lana.svg"
            name="Lana Steiner"
            role="Admin Role"
            address="Lana.steiner@payarena.com"
            dateCreated="1 hour ago"
            userStat="./deactivated.svg"
          />

          <UsersReport
            id="#CM9804"
            userImg="/Natali.svg"
            name="Natali Craig"
            role="Admin Role"
            address="Natali.craig@payarena.com"
            dateCreated="Yesterday"
            userStat="./active.svg"
          />
          <UsersReport
            id="#CM9804"
            userImg="/Natali.svg"
            name="Natali Craig"
            role="Admin Role"
            address="Natali.craig@payarena.com"
            dateCreated="Yesterday"
            userStat="./active.svg"
          />
          <UsersReport
            id="#CM9805"
            userImg="/orlando.svg"
            name="Orlando Diggs"
            role="Admin Role"
            address="Orlando.Diggs@payarena.com"
            dateCreated="Yesterday"
            userStat="./active.svg"
          />
          <UsersReport
            id="#CM9801"
            userImg="/kate.svg"
            name="Kate Morrison"
            role="Admin Role"
            address="Kate.morrison@payarena.com"
            dateCreated="Feb 2, 2023"
            userStat="./underReview.svg"
          />
          <UsersReport
            id="#CM9802"
            userImg="/korey.svg"
            name="Koray Okumus"
            role="Admin Role"
            address="Koray.okumus@payarena.com"
            dateCreated="Feb 3, 2023"
            userStat="./active.svg"
          />
          <UsersReport
            id="#CM9803"
            userImg="/Lana.svg"
            name="Lana Steiner"
            role="Admin Role"
            address="Lana.steiner@payarena.com"
            dateCreated="Feb 4, 2023"
            userStat="./active.svg"
          />
          <UsersReport
            id="#CM9803"
            userImg="/Lana.svg"
            name="Lana Steiner"
            role="Admin Role"
            address="Lana.steiner@payarena.com"
            dateCreated="Feb 4,2023"
            userStat="./deactivated.svg"
          />
          <UsersReport
            id="#CM9804"
            userImg="/Natali.svg"
            name="Natali Craig"
            role="Admin Role"
            address="Natali.craig@payarena.com"
            dateCreated="Yesterday"
            userStat="./active.svg"
          />
          <UsersReport
            id="#CM9804"
            userImg="/Natali.svg"
            name="Natali Craig"
            role="Admin Role"
            address="Natali.craig@payarena.com"
            dateCreated="Yesterday"
            userStat="./active.svg"
          />
          <UsersReport
            id="#CM9805"
            userImg="/orlando.svg"
            name="Orlando Diggs"
            role="Admin Role"
            address="Orlando.Diggs@payarena.com"
            dateCreated="Feb 6, 2023"
            userStat="./deactivated.svg"
          />
          <UsersReport
            id="#CM9805"
            userImg="/orlando.svg"
            name="Orlando Diggs"
            role="Admin Role"
            address="Orlando.Diggs@payarena.com"
            dateCreated="Feb 6, 2023"
            userStat="./deactivated.svg"
          />
        </div>
      </div>
      <div>
        <ul className="flex list-none gap-8 font-poppins justify-end text-xs mt-4">
          <li>
            <img src="./leftArrow.svg" alt="" />
          </li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>
            <img src="./rightArrow.svg" alt="" />
          </li>
        </ul>
      </div>
      <UserCreationModal
        modal={modal}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
}
