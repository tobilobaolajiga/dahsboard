export default function NotContent(props) {
  return (
    <div>
      <div className="flex gap-2 mt-4">
        <div>
          <img src={props.img} alt="" className="w-[24px] h-[24px]" />
        </div>
        <div className="font-poppins">
          <p className="text-sm font-medium text-black">{props.content}</p>
          <p className="text-xs font-normal text-black opacity-40">
            {props.time}
          </p>
        </div>
      </div>
    </div>
  );
}
