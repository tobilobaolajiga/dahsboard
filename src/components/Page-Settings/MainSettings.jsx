import SearchBar from '../Page-dashboard/SearchBar';
import SettingsHeader from './SettingsHeader';
import SetProfile from './SetProfile';
import Notifications from '../Page-dashboard/Notifications';
import AllUserActivities from '../Page-dashboard/AllUserActivities';
export default function MainSettings() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="bg-zinc-50 w-[980px]">
          <SearchBar />
          <SettingsHeader />
          <SetProfile />
        </div>
        <div>
          <Notifications />
          <AllUserActivities />
        </div>
      </div>
    </div>
  );
}
