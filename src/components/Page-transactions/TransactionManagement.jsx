import TransactionMenu from './TransactionMenu';
import MainTransaction from './MainTransaction';
export default function TransactionManagement() {
  return (
    <div className="flex">
      <div className="w-[110px]">
        <TransactionMenu />
      </div>
      <MainTransaction />
    </div>
  );
}
