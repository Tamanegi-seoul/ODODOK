import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Tabs from '@/components/layout/TabMenu';

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
