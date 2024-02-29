export default function TransactionsReport(props) {
  return (
    <div>
      <div className="border-b border-slate">
        <ul className="list-none flex font-poppins font-normal text-xs text-black justify-start items-center h-[40px] mx-2 pl-2">
          <li className="w-[80px]">{props.tnxId}</li>
          <li className="w-[120px]">{props.inst}</li>
          <li className="w-[120px]">{props.benBank}</li>
          <li className="w-[170px]">{props.benName}</li>
          <li className="w-[140px]">{props.accountNumber}</li>
          <li className="w-[170px]">{props.transType}</li>
          <li className="w-[120px]">{props.amount}</li>
          <li className="w-[130px] flex gap-2">
            <img src="./time.svg" alt="" className="w-[12px] h-[13px]" />
            {props.date}
          </li>
          <li className="w-[100px] pl-4">
            <img src={props.Stat} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
