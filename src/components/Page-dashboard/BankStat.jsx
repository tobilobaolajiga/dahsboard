export default function BankStat(props) {
  return (
    <div>
      <div className="mt-4 flex justify-between font-poppins place-items-center">
        <p className="text-xs font-normal">{props.bankName}</p>
        <p className="text-[9px] text-black opacity-40">{props.time}</p>
      </div>
      <img src={props.status} className="mt-2"></img>
    </div>
  );
}
