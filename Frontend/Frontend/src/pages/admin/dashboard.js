import React, { useState } from "react";
import {
  QqOutlined,
  PieChartOutlined,
  LineChartOutlined,
  HeatMapOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Overview from "./overview";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import WeeklyOverview from "./weeklyoverview";
import MonthlyOverview from "./monthlyoverview";
import AddUser from "./addclient";
import AddPet from "./addpet";
import AddPetOwner from "./addpetowner";
import AllUsers from "./allusers";
import AllPetOwners from "./allpetowners";
import AllShelters from "./allshelters";
import AllIndividual from "./allindividual";
import AllPets from "./allpets";
import AllUnadoptedPets from "./allunadoptedpets";
import AllAdoptedPets from "./alladoptedpets";
import { useSelector } from 'react-redux';
import { selectUser } from "../../redux/UserSlice";
const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Overview", "1", <PieChartOutlined />),
  getItem("Weekly Overview", "2", <LineChartOutlined />),
  getItem("Monthly Overview", "3", <HeatMapOutlined />),
  getItem("Clients", "sub1", <UserOutlined />, [
    getItem("Add Client", "4"),
    getItem("All Clients", "5"),
  ]),
  getItem("Pets", "sub2", <QqOutlined />, [
    getItem("Add Pet", "8"),
    getItem("All Pets", "9"),
    getItem("Unadopted Pets", "10"),
    getItem("Adopted Pets", "11"),
  ]),
  getItem("Pet Owners", "sub3", <HomeOutlined />, [
    getItem("Add Pet Owners", "12"),
    getItem("All Pet Owner", "13"),
    getItem("Shelters", "14"),
    getItem("Individual", "15"),
  ]),
];

const DashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item.key);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "1":
        return (
          <div>
            <Overview />
          </div>
        );
      case "2":
        return (
          <div>
            <WeeklyOverview />
          </div>
        );
      case "3":
        return (
          <div>
            <MonthlyOverview />
          </div>
        );
      case "4":
        return (
          <div>
            <AddUser />
          </div>
        );
        case "5":
          return (
            <div>
              <AllUsers />
            </div>
          );
      case "8":
        return (
          <div>
            <AddPet />
          </div>
        );
        case "9":
          return (
            <div>
              <AllPets />
            </div>
          );
          case "10":
            return (
              <div>
                <AllUnadoptedPets />
              </div>
            );
            case "11":
            return (
              <div>
                <AllAdoptedPets />
              </div>
            );
      case "12":
        return (
          <div>
            <AddPetOwner />
          </div>
        );
        case "13":
          return (
            <div>
              <AllPetOwners />
            </div>
          );
          case "14":
            return (
              <div>
                <AllShelters />
              </div>
            );
            case "15":
              return (
                <div>
                  <AllIndividual />
                </div>
              );
      // Add cases for other menu items here...

      default:
        return null;
    } 
  };

  return (
    <>

      <NavBar />
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onSelect={handleMenuItemClick}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: "10px" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {renderContent()}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};

export default DashBoard;
