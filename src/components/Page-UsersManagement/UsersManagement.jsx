import UserMenu from './UserMenu';
import MainUser from './MainUser';

export default function UsersManagement() {
  return (
    <div>
      <div className="flex">
        <div className="w-[110px]">
          <UserMenu />
        </div>
        <MainUser />
      </div>
    </div>
  );
}
