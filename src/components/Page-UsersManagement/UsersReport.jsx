export default function UsersReport(props) {
  return (
    <div>
      <div className="border-b border-slate">
        <ul className="list-none flex font-poppins font-normal text-xs text-black justify-start items-center h-[40px] ">
          <li className="w-[80px] pl-4">{props.id}</li>
          <li className="w-[220px] pl-4 flex gap-2 items-center">
            <img src={props.userImg} alt="" />
            {props.name}
          </li>
          <li className="w-[200px] pl-4">{props.role}</li>
          <li className="w-[297px] pl-4">{props.address}</li>
          <li className="w-[180px] pl-4 flex gap-[4px]">
            <img src="./time.svg" alt="" className="w-[12px] h-[13px]" />
            {props.dateCreated}
          </li>
          <li className="w-[138px] pl-4">
            <img src={props.userStat} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
