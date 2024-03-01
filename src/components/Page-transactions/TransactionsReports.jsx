import TransactionsReport from './TransactionsReport';
import TransactionModal from './TransactionModal';
import { useState } from 'react';
export default function TransactionsReports() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
    const body = document.querySelector('#body');
    body.style.position = 'fixed';
  };

  const closeModal = () => {
    setModal(!modal);
    const body = document.querySelector('#body');
    body.style.position = '';
  };
  return (
    <div className="bg-zinc-50 p-4 font-poppins text-xs w-[1230px] " id="body">
      <div className="bg-white m-2 p-4 ">
        <div className="flex justify-between items-center">
          <ul className="flex gap-4 items-center">
            <li className="flex gap-2 items-center border-r pr-4 p-2">
              Transaction Report
            </li>
            <li>
              <ul className="flex list-disc gap-6 m-2">
                <li>Approved</li>
                <li>Failed</li>
                <li>Pending</li>
              </ul>
            </li>

            <li>
              <img src="/levels.svg" alt="" className="border-l pl-4" />
            </li>
            <li className=" border-r pr-4">
              <img src="/arrows.svg" alt="" />
            </li>
            <li
              className="flex gap-2 items-center cursor-pointer"
              onClick={openModal}
            >
              <img src="/plussign.svg" alt="" width={30} height={28} />
              Export Transaction Report
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
              <li className="border-r-2 p-2 w-[80px] h-[40px]">Tnx ID</li>
              <li className="border-r-2 p-2 w-[120px] h-[40px]">Institution</li>
              <li className="border-r-2 p-2 w-[120px] h-[40px]">
                Beneficiary Bank
              </li>
              <li className="border-r-2 p-2 w-[170px] h-[40px]">
                Beneficiary Name
              </li>
              <li className="border-r-2 p-2 w-[140px] h-[40px]">
                Account Number
              </li>
              <li className="border-r-2 p-2 w-[170px] h-[40px]">
                Transaction Type
              </li>
              <li className="border-r-2 p-2 w-[120px] h-[40px]">Amount</li>
              <li className="border-r-2 p-2 w-[130px] h-[40px]">Date</li>
              <li className=" p-2 w-[100px] h-[40px]">Status</li>
            </ul>
          </div>
          <TransactionsReport
            tnxId="#CM9801"
            inst="First Bank"
            benBank="Zenith Bank"
            benName="Meadow Lane"
            accountNumber="3886564237"
            transType="Meadow Lane"
            amount="₦150,000"
            date="Just Now"
            Stat="./orange.svg"
          />
          <TransactionsReport
            tnxId="#CM9801"
            inst="First Bank"
            benBank="Zenith Bank"
            benName="Meadow Lane"
            accountNumber="3886564237"
            transType="Meadow Lane"
            amount="₦150,000"
            date="Just Now"
            Stat="./orange.svg"
          />
          <TransactionsReport
            tnxId="#CM9801"
            inst="First Bank"
            benBank="Zenith Bank"
            benName="Meadow Lane"
            accountNumber="3886564237"
            transType="Meadow Lane"
            amount="₦150,000"
            date="Just Now"
            Stat="./orange.svg"
          />
          <TransactionsReport
            tnxId="#CM9801"
            inst="First Bank"
            benBank="Zenith Bank"
            benName="Meadow Lane"
            accountNumber="3886564237"
            transType="Meadow Lane"
            amount="₦150,000"
            date="Just Now"
            Stat="./orange.svg"
          />
          <TransactionsReport
            tnxId="#CM9801"
            inst="First Bank"
            benBank="Zenith Bank"
            benName="Meadow Lane"
            accountNumber="3886564237"
            transType="Meadow Lane"
            amount="₦150,000"
            date="Just Now"
            Stat="./orange.svg"
          />
          <TransactionsReport
            tnxId="#CM9801"
            inst="First Bank"
            benBank="Zenith Bank"
            benName="Meadow Lane"
            accountNumber="3886564237"
            transType="Meadow Lane"
            amount="₦150,000"
            date="Just Now"
            Stat="./orange.svg"
          />
          <TransactionsReport
            tnxId="#CM9801"
            inst="First Bank"
            benBank="Zenith Bank"
            benName="Meadow Lane"
            accountNumber="3886564237"
            transType="Meadow Lane"
            amount="₦150,000"
            date="Just Now"
            Stat="./orange.svg"
          />
          <TransactionsReport
            tnxId="#CM9801"
            inst="First Bank"
            benBank="Zenith Bank"
            benName="Meadow Lane"
            accountNumber="3886564237"
            transType="Meadow Lane"
            amount="₦150,000"
            date="Just Now"
            Stat="./orange.svg"
          />
          <TransactionsReport
            tnxId="#CM9801"
            inst="Zenith Bank"
            benBank="Keystone Bank"
            benName="Bagwell Avenue Ocala"
            accountNumber="3886564237"
            transType="Meadow Lane"
            amount="₦150,000"
            date="A minute ago"
            Stat="./green.svg"
          />
          <TransactionsReport
            tnxId="#CM9801"
            inst="Keystone Bank"
            benBank="First Bank"
            benName="Larry San Francisco"
            accountNumber="3886564237"
            transType="Larry San Francisco"
            amount="₦150,000"
            date="Yesterday"
            Stat="./red.svg"
          />
        </div>
        <TransactionsReport
          tnxId="#CM9801"
          inst="Zenith Bank"
          benBank="Keystone Bank"
          benName="Bagwell Avenue Ocala"
          accountNumber="3886564237"
          transType="Meadow Lane"
          amount="₦150,000"
          date="A minute ago"
          Stat="./green.svg"
        />
        <TransactionsReport
          tnxId="#CM9801"
          inst="Keystone Bank"
          benBank="First Bank"
          benName="Larry San Francisco"
          accountNumber="3886564237"
          transType="Larry San Francisco"
          amount="₦150,000"
          date="Yesterday"
          Stat="./red.svg"
        />
        <TransactionsReport
          tnxId="#CM9801"
          inst="Access Bank"
          benBank="Fidelity Bank"
          benName="Washburn Baton Rouge"
          accountNumber="3886564237"
          transType="Washburn Baton Rouge"
          amount="₦150,000"
          date="Yesterday"
          Stat="./orange.svg"
        />
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
      <TransactionModal
        modal={modal}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
}
