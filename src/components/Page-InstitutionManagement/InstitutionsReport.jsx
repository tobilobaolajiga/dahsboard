export default function InstitutionsReport(props) {
  return (
    <div>
      <div className="border-b border-slate">
        <ul className="list-none flex font-poppins font-normal text-xs text-black justify-start items-center h-[40px] ">
          <li className="w-[95px] pl-4">{props.instId}</li>
          <li className="w-[120px] pl-4">{props.instName}</li>
          <li className="w-[120px] pl-4">{props.instRole}</li>
          <li className="w-[170px] pl-4">{props.instAddress}</li>
          <li className="w-[120px] pl-4">{props.contactPerson}</li>
          <li className="w-[230px] pl-4">{props.contactAddress}</li>
          <li className="w-[130px] pl-4 flex gap-[4px]">
            <img src="./time.svg" alt="" className="w-[12px] h-[13px]" />
            {props.dateCreated}
          </li>
          <li className="w-[128px] pl-4">
            <img src={props.instStat} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
