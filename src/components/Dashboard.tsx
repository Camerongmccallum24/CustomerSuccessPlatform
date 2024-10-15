import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, BarChart } from 'lucide-react'; // Assuming you're using lucide-react for icons

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <Link to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><Home /></span>
              <span className="text-sm font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/users" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><Users /></span>
              <span className="text-sm font-medium">Users</span>
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BarChart /></span>
              <span className="text-sm font-medium">Analytics</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10 text-2xl font-bold">
        <h1>Welcome to your Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
// ... component code ...

