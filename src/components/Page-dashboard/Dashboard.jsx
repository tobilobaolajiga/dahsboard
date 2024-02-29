import Menu from './Menu';
import Main from './Main';
export default function Dashboard() {
  return (
    <div>
      <div className="flex">
        <Menu />
        <Main />
      </div>
    </div>
  );
}
