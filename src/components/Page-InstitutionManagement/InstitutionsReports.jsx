import InstitutionsReport from './InstitutionsReport';
import { useState } from 'react';
import InstitutionCreationModal from './InstitutionCreationModal';
export default function InstitutionsReports() {
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
      <div className="bg-white m-2 p-4 " id="body">
        <div className="flex justify-between items-center">
          <ul className="flex gap-4 items-center">
            <li
              className="flex gap-2 items-center border-r pr-4 cursor-pointer"
              onClick={openModal}
            >
              <img src="/plussign.svg" alt="" width={30} height={28} /> New
              Institution
            </li>

            <li>
              <img src="/levels.svg" alt="" />
            </li>
            <li className=" border-r pr-4">
              <img src="/arrows.svg" alt="" />
            </li>
            <li className="flex gap-2 items-center">
              <img src="/plussign.svg" alt="" width={30} height={28} />
              Export Institutions Report
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
              <li className="border-r-2 p-2 w-[95px] h-[40px]">
                Institution ID
              </li>
              <li className="border-r-2 p-2 w-[120px] h-[40px]">
                Institution Name
              </li>
              <li className="border-r-2 p-2 w-[120px] h-[40px]">
                Institution Role
              </li>
              <li className="border-r-2 p-2 w-[170px] h-[40px]">
                Institution Email Address
              </li>
              <li className="border-r-2 p-2 w-[120px] h-[40px]">
                Contact Person
              </li>
              <li className="border-r-2 p-2 w-[230px] h-[40px]">
                Contact Person Email Address
              </li>
              <li className="border-r-2 p-2 w-[130px] h-[40px]">
                Date Created
              </li>
              <li className=" p-2 w-[128px] h-[40px]">Institution Status</li>
            </ul>
          </div>
          <InstitutionsReport
            instId="#CM9801"
            instName="First Bank"
            instRole="Inbound"
            instAddress="info@Firstbank.com"
            contactPerson="Kate Morrison"
            contactAddress="Kate.Morrison@Firstbank.com"
            dateCreated="Just Now"
            instStat="./underReview.svg"
          />
          <InstitutionsReport
            instId="#CM9802"
            instName="Zenith Bank"
            instRole="Outbound"
            instAddress="info@Zenithbank.com"
            contactPerson="Koray Okumus"
            contactAddress="Koray.Okumus@Zenithbank.com"
            dateCreated="A minute ago"
            instStat="./active.svg"
          />
          <InstitutionsReport
            instId="#CM9803"
            instName="Access Bank"
            instRole="Inbound and Outbound"
            instAddress="info@Accessbank.com"
            contactPerson="Lana Steiner"
            contactAddress="Lana.Steiner@Accessbank.com"
            dateCreated="1 hour ago"
            instStat="./deactivated.svg"
          />
          <InstitutionsReport
            instId="#CM9803"
            instName="Access Bank"
            instRole="Inbound and Outbound"
            instAddress="info@Accessbank.com"
            contactPerson="Lana Steiner"
            contactAddress="Lana.Steiner@Accessbank.com"
            dateCreated="1 hour ago"
            instStat="./deactivated.svg"
          />
          <InstitutionsReport
            instId="#CM9804"
            instName="Zenith Bank"
            instRole="Outbound"
            instAddress="info@Zenithbank.com"
            contactPerson="Natali Craig"
            contactAddress="Natali.Craig@Zenithbank.com"
            dateCreated="Yesterday"
            instStat="./active.svg"
          />
          <InstitutionsReport
            instId="#CM9801"
            instName="First Bank"
            instRole="Inbound"
            instAddress="info@Firstbank.com"
            contactPerson="Orlando Diggs"
            contactAddress="Orlando.Diggs@Firstbank.com"
            dateCreated="Yesterday"
            instStat="./active.svg"
          />
          <InstitutionsReport
            instId="#CM9801"
            instName="Access Bank"
            instRole="Inbound and Outbound"
            instAddress="info@Accessbank.com"
            contactPerson="Kate Morrison"
            contactAddress="Kate.Morrison@Accessbank.com"
            dateCreated="Feb 2, 2023"
            instStat="./underReview.svg"
          />
          <InstitutionsReport
            instId="#CM9802"
            instName="Zenith Bank"
            instRole="Outbound"
            instAddress="info@Zenithbank.com"
            contactPerson="Koray Okumus"
            contactAddress="Koray.Okumus@Zenithbank.com"
            dateCreated="Feb 3, 2023"
            instStat="./active.svg"
          />
          <InstitutionsReport
            instId="#CM9801"
            instName="First Bank"
            instRole="Inbound"
            instAddress="info@Firstbank.com"
            contactPerson="Lana Steiner"
            contactAddress="Lana.steiner@Firstbank.com"
            dateCreated="Feb 4, 2023"
            instStat="./active.svg"
          />
          <InstitutionsReport
            instId="#CM9801"
            instName="First Bank"
            instRole="Inbound"
            instAddress="info@Firstbank.com"
            contactPerson="Lana Steiner"
            contactAddress="Lana.Steiner@Firstbank.com"
            dateCreated="Feb 4, 2023"
            instStat="./deactivated.svg"
          />
          <InstitutionsReport
            instId="#CM9803"
            instName="Access Bank"
            instRole="Inbound and Outbound"
            instAddress="info@Accessbank.com"
            contactPerson="Natali Craig"
            contactAddress="Natali.Craig@Accessbank.com"
            dateCreated="Feb 5, 2023"
            instStat="./active.svg"
          />
          <InstitutionsReport
            instId="#CM9804"
            instName="Zenith Bank"
            instRole="Outbound"
            instAddress="info@Zenithbank.com"
            contactPerson="Natali Craig"
            contactAddress="Natali.Craig@Zenithbank.com"
            dateCreated="Feb 5, 2023"
            instStat="./active.svg"
          />
          <InstitutionsReport
            instId="#CM9801"
            instName="First Bank"
            instRole="Inbound"
            instAddress="info@Firstbank.com"
            contactPerson="Orlando Diggs"
            contactAddress="Orlando.Diggs@Firstbank.com"
            dateCreated="Feb 6, 2023"
            instStat="./deactivated.svg"
          />
          <InstitutionsReport
            instId="#CM9801"
            instName="First Bank"
            instRole="Inbound"
            instAddress="info@Firstbank.com"
            contactPerson="Orlando Diggs"
            contactAddress="Orlando.Diggs@Firstbank.com"
            dateCreated="Feb 6, 2023"
            instStat="./deactivated.svg"
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
      <InstitutionCreationModal
        modal={modal}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
}
