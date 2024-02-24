import React from 'react';
import { useState } from 'react';
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  sidebarClasses,
  menuClasses,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <div>
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
            color: 'red ',
            fontWeight: 'bold',
          },
        }}
      >
        <Menu>
          <MenuItem
            active={true}
            onClick={() => setSelectedMenu('first')}
            component={<Link to={'/first'} />}
          >
            {'first'}
          </MenuItem>
          <MenuItem
            active={true}
            onClick={() => setSelectedMenu('second')}
            component={<Link to={'/second'} />}
          >
            {'second'}
          </MenuItem>
          {/* <SubMenu label="Charts" icon={<HomeOutlinedIcon />}> */}
          <SubMenu label="Charts">
            <Menu>
              <MenuItem
                active={true}
                onClick={() => setSelectedMenu('sub-third')}
                component={<Link to={'/sub-third'} />}
              >
                {'sub-third'}
              </MenuItem>
              <MenuItem
                active={true}
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
