import InstitutionMenu from './InstitutionMenu';
import MainInstitution from './MainInstitution';
export default function InstitutionManagement() {
  return (
    <div className="flex">
      <div className="w-[110px]">
        <InstitutionMenu />
      </div>
      <MainInstitution />
    </div>
  );
}
