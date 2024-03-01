import SettingsMenu from './SettingsMenu';
import MainSettings from './MainSettings';

export default function SettingsManagement() {
  return (
    <div>
      <div className="flex">
        <div className="w-[110px]">
          <SettingsMenu />
        </div>
        <MainSettings />
      </div>
    </div>
  );
}
