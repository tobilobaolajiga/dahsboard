import SearchBar from '../Page-dashboard/SearchBar';
import TransactionHeader from './TransactionHeader';
import SidebarTransaction from './SidebarTransaction';
import GraphsTransaction from './GraphsTransactions';
import TransactionsReports from './TransactionsReports';
export default function MainTransaction() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="bg-zinc-50 w-[980px]">
          <SearchBar />
          <TransactionHeader />
          <GraphsTransaction />
        </div>
        <SidebarTransaction />
      </div>
      <TransactionsReports />
    </div>
  );
}
