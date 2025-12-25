import { Routes, Route } from 'react-router-dom';
import { Typography, Button } from 'antd';

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            <Title level={3}>Home Route</Title>
            <Button type='primary'>Ant Design Works</Button>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
