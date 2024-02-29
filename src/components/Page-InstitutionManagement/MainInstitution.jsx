import SearchBar from '../Page-dashboard/SearchBar';
import InstitutionHeader from './InstitutionHeader';
import SidebarInstitution from './SidebarInstitution';
import GraphsInstitution from './GraphsInstitution';
import InstitutionsReports from './InstitutionsReports';
export default function MainInstitution() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="bg-zinc-50 w-[980px]">
          <SearchBar />
          <InstitutionHeader />
          <GraphsInstitution />
        </div>
        <SidebarInstitution />
      </div>
      <InstitutionsReports />
    </div>
  );
}
