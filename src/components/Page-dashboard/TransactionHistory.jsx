import Transactions from './Transactions';
export default function TransactionHistory() {
  return (
    <div className="bg-zinc-50 p-4 font-poppins">
      <div className="bg-white m-2 p-4">
        <div className="flex justify-between">
          <div className="flex flex-row gap-8 place-content-start items-center">
            <p className="font-semibold text-sm ">Transaction History</p>
            <p>|</p>
            <ul className="flex gap-8 font-normal text-xs list-disc">
              <li>Approved</li>
              <li>Failed</li>
              <li>Pending </li>
            </ul>
            <p>|</p>
            <p className="font-normal text-xs flex gap-2">
              Inbound Transaction <img src="./smallestChevron_ic.svg" alt="" />
            </p>
          </div>
          <div>
            <ul className="flex list-none gap-6 font-poppins text-xs">
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
        </div>
        <div>
          <div className="border-b border-slate-200 my-4">
            <ul className="list-none flex gap-0 font-poppins text-xs text-black opacity-40 justify-start  items-center text-justify mt-6">
              <li className="w-[80px] h-[40px] border-r-2 ">Tnx ID</li>
              <li className="w-[128px] h-[40px] border-r-2 pl-4">
                Institution
              </li>
              <li className="w-[129px] h-[40px] border-r-2 pl-4">
                Beneficiary Bank
              </li>
              <li className="w-[164px] h-[40px] border-r-2 pl-4">
                Beneficiary Name
              </li>
              <li className="w-[130px] h-[40px] border-r-2 pl-4">
                Account Number
              </li>
              <li className="w-[164px] h-[40px] border-r-2 pl-4">
                Transaction Type
              </li>
              <li className="w-[110px] h-[40px] border-r-2 pl-4">Amount</li>
              <li className="w-[110px] h-[40px] border-r-2 pl-4">Date</li>
              <li className="w-[92px] h-[40px] pl-4">Status</li>
            </ul>
          </div>
          <Transactions
            tnxId="#CM9801"
            institution="First Bank"
            beneficiaryBank="Zenith Bank"
            beneficiaryName="Meadow Lane"
            accountNumber="386564237"
            transactionType="Meadow Lane"
            amount="₦150,000"
            date="Just Now"
            status="./orange.svg"
          />
          <Transactions
            tnxId="#CM9802"
            institution="Zenith Bank"
            beneficiaryBank="Keystone Bank"
            beneficiaryName="Bogwell Avenue Ocala"
            accountNumber="386564237"
            transactionType="Bogwell Avenue Ocala"
            amount="₦150,000"
            date="A minute ago"
            status="./green.svg"
          />
          <Transactions
            tnxId="#CM9804"
            institution="Keystone Bank"
            beneficiaryBank="First Bank"
            beneficiaryName="Larry San Francisco"
            accountNumber="386564237"
            transactionType="Larry San Francisco"
            amount="₦150,000"
            date="Yesterday"
            status="./red.svg"
          />
          <Transactions
            tnxId="#CM9803"
            institution="Access Bank"
            beneficiaryBank="Fidelity Bank"
            beneficiaryName="Washburn Baton Rouge"
            accountNumber="386564237"
            transactionType="Washburn Baton Rouge"
            amount="₦150,000"
            date="Yesterday"
            status="./orange.svg"
          />
        </div>
      </div>
    </div>
  );
}
