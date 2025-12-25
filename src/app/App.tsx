import { Routes, Route } from 'react-router-dom';
import { Typography } from 'antd';

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Title level={3}>Home Route Works</Title>} />
    </Routes>
  );
};

export default App;
