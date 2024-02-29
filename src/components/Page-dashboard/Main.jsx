import SearchBar from './SearchBar';
import DashboardHeader from './DashboardHeader';
import Graphs from './Graphs';
import SideBar from './SideBar';
import TransactionHistory from './TransactionHistory';
export default function Main() {
  return (
    <div>
      <div className=" flex flex-row">
        <div className="bg-zinc-50">
          <SearchBar />
          <DashboardHeader />
          <Graphs />
        </div>
        <div>
          <SideBar />
        </div>
      </div>
      <div>
        <TransactionHistory />
      </div>
    </div>
  );
}
