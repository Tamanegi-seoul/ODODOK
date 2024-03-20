import SideBar from '@/components/layout/SideBar';
import ContentsLayout from '@/components/layout/ContentsLayout';
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
