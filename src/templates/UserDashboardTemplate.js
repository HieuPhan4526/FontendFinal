import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import { Layout, Menu } from 'antd';
import { UserOutlined ,SketchOutlined,ClusterOutlined } from '@ant-design/icons';
import { history } from '../App';
const { Sider } = Layout;
export default function UserDashboardTemplate(props) {
  return (
    <Route {...props} render={(propRoute) => {
      return <Fragment>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            width={300}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo"></div>
            <Menu
              theme="dark"
              mode="vertical"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined/>,
                  label: "Quản Lý Người Dùng",
                  onClick: () => {history.push("/dashboard/users")}
                },
                {
                  key: "2",
                  icon: <SketchOutlined />,
                  label: "Quản Lý Công Việc",
                  onClick: () => {history.push("/dashboard/works")}
                },
                {
                  key: "3",
                  icon: <SketchOutlined />,
                  label: "Quản Lý Loại Công Việc",
                  onClick: () => {history.push("/dashboard/workstype")}
                },
                {
                  key: "4",
                  icon: <ClusterOutlined />,
                  label: "Quản Lý Dịch Vụ",
                  onClick: () => {history.push("/dashboard/services")}
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header {...propRoute} />
            <props.Component {...propRoute} />
          </Layout>
        </Layout>
      </Fragment>
    }} />
  )
}