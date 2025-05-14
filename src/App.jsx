import { useState, useEffect } from 'react';


import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './pages/Generators';
import Alerts from './pages/Alerts';

function App() {
  const [generators, setGenerators] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const fetchData = async () => {
    try {
      // Mock API data
      const mockGenerators = [
        { id: 'GEN1', location: 'Main Plant', status: 'running', temp: 75, oil: 82 },
        { id: 'GEN2', location: 'Backup Unit', status: 'idle', temp: 45, oil: 65 },
      ];
      const mockAlerts = [
        { id: 1, generatorId: 'GEN1', type: 'high_temp', message: 'High temperature warning', timestamp: new Date(), resolved: false },
      ];
      setGenerators(mockGenerators);
      setAlerts(mockAlerts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // Simulate fetching data on component mount  
  useState(() => {
    fetchData();
  }, []);


  return (
    <>
      
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard generators={generators} />} />
            <Route path="/alerts" element={<Alerts alerts={alerts} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
