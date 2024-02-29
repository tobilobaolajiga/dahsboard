import Dashboard from './components/Page-dashboard/Dashboard';
import UsersManagement from './components/Page-UsersManagement/UsersManagement';
import InstitutionManagement from './components/Page-InstitutionManagement/InstitutionManagement';
import TransactionManagement from './components/Page-transactions/TransactionManagement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/users" element={<UsersManagement />} />

        <Route path="/institutions" element={<InstitutionManagement />} />

        <Route path="/transactions" element={<TransactionManagement />} />
      </Routes>
    </BrowserRouter>
  );
}
