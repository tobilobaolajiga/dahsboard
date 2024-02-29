export default function Transactions(props) {
  return (
    <div className="border-b border-slate mb-4">
      <ul className="list-none flex  font-poppins text-xs text-black justify-start -my-2 ">
        <li className="w-[80px] h-[40px] ">{props.tnxId}</li>
        <li className="w-[128px] h-[40px] pl-4">{props.institution}</li>
        <li className="w-[129px] h-[40px] pl-4">{props.beneficiaryBank}</li>
        <li className="w-[164px] h-[40px] pl-4">{props.beneficiaryName}</li>
        <li className="w-[130px] h-[40px] pl-4">{props.accountNumber}</li>
        <li className="w-[164px] h-[40px] pl-4">{props.transactionType}</li>
        <li className="w-[110px] h-[40px] pl-4">{props.amount}</li>
        <li className="w-[130px] h-[40px] flex pl-4">
          <img src="./time.svg" alt="" className="mr-2 w-[12px] h-[13px]" />
          {props.date}
        </li>
        <li className="w-[92px] h-[40px] pl-4">
          <img src={props.status} alt="" />
        </li>
      </ul>
    </div>
  );
}
