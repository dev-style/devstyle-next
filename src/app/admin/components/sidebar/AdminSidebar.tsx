import { FC, useEffect, useState } from "react";
import { ProSidebar, SubMenu , Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";

import avatarDefault from "../../../../../public/assets/images/avatar.png";


import {GroupAddIcon ,RecentActorsIcon,ArrowForwardIosIcon,ExitToAppIcon, AssessmentIcon , BarChartIcon ,ChecklistRtlIcon,Diversity3Icon, ArrowBackIosIcon , HomeOutlinedIcon ,AddCircleIcon, GroupsIcon} from "./Icon"

import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography className="!text-[16px] !font-Poppins">
        {title}
      </Typography>
      <Link href={to}/>
    </MenuItem>
  );
};

const Sidebar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setlogout] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);


  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const logoutHandler = () => {
    setlogout(true);
  };


  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${"#fff !important"}`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important"
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          opacity: 1
        },
        "& .pro-menu-item": {
          color: "#000"
        }
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 99999999999999,
          width: isCollapsed ? "0%" : "16%"
        }}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0"
            }}
          >
            {!isCollapsed &&
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Link href="/" className="block">
                  <h3 className="text-[25px] font-Poppins uppercase dark:text-white text-black">
                    ELearning
                  </h3>
                </Link>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="inline-block"
                >
                  <ArrowBackIosIcon className="text-black dark:text-[#ffffffc1]" />
                </IconButton>
              </Box>}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile-user"
                  width={100}
                  height={100}
                  src={user.avatar ? user.avatar.url : avatarDefault}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "3px solid #5b6fe6",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  className="!text-[20px] text-black dark:text-[#ffffffc1]"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ m: "10px 0 0 0" }}
                  className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize"
                >
                  - {user?.role} 
                </Typography>
              </Box>
            </Box>
          )}

<Box paddingLeft={isCollapsed ? undefined : "10%"}>



            <Item
              title="Dashboard"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 25px" }}
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
            >
              {!isCollapsed && "Data"}
            </Typography>
            
            <SubMenu  title={!isCollapsed? "USER":""}  icon={<GroupsIcon />}    selected={selected}
              setSelected={setSelected}>

            <Item
              title="Create users"
              to="/admin/users"
              icon={<GroupAddIcon />}
              selected={selected}
              setSelected={setSelected}
              />
            <Item
              title="List users"
              to="/admin/"
              icon={<RecentActorsIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              </SubMenu>

         
            <SubMenu  title={!isCollapsed? "GOODIES":""}  icon={<GroupsIcon />}    selected={selected}
              setSelected={setSelected}>

            <Item
              title="Create goodie"
              to="/admin/create-goodie"
              icon={<AddCircleIcon />}
              selected={selected}
              setSelected={setSelected}
              />
            <Item
              title="List goodies"
              to="/admin/list-goodies"
              icon={<ChecklistRtlIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              </SubMenu>

         

       
           
           

            <Typography
              variant="h5"
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Controllers"}
            </Typography>
            <Item
              title="Manage Team"
              to="/admin/team"
              icon={<Diversity3Icon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Analytics"}
            </Typography>
            <Item
              title="goodies Analytics"
              to="/admin/goodies-analytics"
              icon={<AssessmentIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Orders Analytics"
              to="/admin/orders-analytics"
              icon={<BarChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Users Analytics"
              to="/admin/users-analytics"
              icon={<AssessmentIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Extras"}
            </Typography>
            <div onClick={logoutHandler}>
              <Item
                title="Logout"
                to="/"
                icon={<ExitToAppIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </Box>


        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
