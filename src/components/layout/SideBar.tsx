import { useState } from 'react';
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  sidebarClasses,
  menuClasses,
  useProSidebar,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import styles from '@/styles/modules/sidebar.module.scss';

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const divStyle = {
    padding: '9px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: '1px',
    '&:hover': {
      backgroundColor: '#fff',
    },
  };
  // const { collapseSidebar } = useProSidebar();
  return (
    <div className={styles.sidebar}>
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            // backgroundColor: 'red',
            height: '100vh',
          },
          [`.${sidebarClasses.root}`]: {},
          [`.${menuClasses.subMenuRoot}`]: {
            // color: 'blue',
          },
          [`.${menuClasses.menuItemRoot}`]: {},
          [`.${menuClasses.active}`]: {
            color: 'orange ',
            fontWeight: 'bold',
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  [`&.hover`]: {
                    backgroundColor: '#fff !important',
                  },
                  color: disabled ? '#f5d9ff' : '#d359ff',
                  backgroundColor: active ? '#eecef9' : undefined,
                };
            },
          }}
        >
          <MenuItem
            active={true}
            onClick={() => setSelectedMenu('home')}
            component={<Link to={'/home'} />}
          >
            {/* {'home'} */}
            <div
              style={{
                padding: '9px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 15,
                letterSpacing: '1px',
                [`&.hover`]: {
                  backgroundColor: '#fff',
                },
              }}
            >
              ododok
            </div>
          </MenuItem>
          <MenuItem
            active={false}
            onClick={() => setSelectedMenu('about')}
            component={<Link to={'/about'} />}
          >
            {'about'}
          </MenuItem>
          <MenuItem
            active={false}
            onClick={() => setSelectedMenu('write')}
            component={<Link to={'/write'} />}
          >
            {'write'}
          </MenuItem>
          {/* <SubMenu label="Charts" icon={<HomeOutlinedIcon />}> */}
          <SubMenu label="Charts">
            <Menu>
              <MenuItem
                active={false}
                onClick={() => setSelectedMenu('sub-third')}
                component={<Link to={'/sub-third'} />}
              >
                {'sub-third'}
              </MenuItem>
              <MenuItem
                active={false}
                onClick={() => setSelectedMenu('sub-fourth')}
                component={<Link to={'/sub-fourth'} />}
              >
                {'sub-fourth'}
              </MenuItem>
            </Menu>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
