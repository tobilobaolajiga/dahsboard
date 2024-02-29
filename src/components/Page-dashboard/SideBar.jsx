import Notifications from './Notifications';
import AllUserActivities from './AllUserActivities';
export default function SideBar() {
  return (
    <div className="w-[270px]">
      <div>
        <Notifications />
      </div>
      <AllUserActivities />
    </div>
  );
}
