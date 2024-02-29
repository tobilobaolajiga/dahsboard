import SearchBar from '../Page-dashboard/SearchBar';
import UsersHeader from './UsersHeader';
import GraphsUser from './GraphsUser';
import SidebarUser from './SidebarUser';
import UsersReports from './UsersReports';
export default function MainUser() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="bg-zinc-50 w-[980px]">
          <SearchBar />
          <UsersHeader />
          <GraphsUser />
        </div>

        <SidebarUser />
      </div>
      <UsersReports />
    </div>
  );
}
