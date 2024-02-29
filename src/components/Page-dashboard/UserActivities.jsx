export default function UserActivities(props) {
  return (
    <div className="flex gap-2 mt-6 ">
      <div>
        <img src={props.userImg} alt="" />
      </div>
      <div className="font-poppins">
        <p className="text-sm font-medium text-black">{props.activity}</p>
        <p className="text-xs font-normal text-black opacity-40">
          {props.time}
        </p>
      </div>
    </div>
  );
}
