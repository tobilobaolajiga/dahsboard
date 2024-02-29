import Profile from '../Page-dashboard/Profile';
import AllUserActivities from '../Page-dashboard/AllUserActivities';
export default function SidebarUser() {
  return (
    <div className="bg-zinc-50 h-[320px]">
      <div className="w-[250px] h-[310px] bg-white pb-4 pt-6">
        <Profile />
        <div className=" scrollbar-webkit overflow-y-scroll h-[210px]">
          <AllUserActivities />
        </div>
      </div>
    </div>
  );
}
