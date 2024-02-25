import { NONAME } from 'dns';
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
            color: 'orange ',
            fontWeight: 'bold',
          },
        }}
      >
        <Menu>
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
              }}
            >
              ododok
            </div>
          </MenuItem>
          <MenuItem
            active={false}
            onClick={() => setSelectedMenu('first')}
            component={<Link to={'/first'} />}
          >
            {'first'}
          </MenuItem>
          <MenuItem
            active={false}
            onClick={() => setSelectedMenu('second')}
            component={<Link to={'/second'} />}
          >
            {'second'}
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
