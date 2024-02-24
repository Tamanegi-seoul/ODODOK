import SideBar from '@/components/layout/Sidebar';
import ContentsLayout from './ContentsLayout';
import styles from '@/styles/modules/mainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <SideBar />
      <ContentsLayout />
    </div>
  );
};

export default MainLayout;
