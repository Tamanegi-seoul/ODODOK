import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Tabs from './TabMenu';

const ContentsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Tabs></Tabs>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default ContentsLayout;
