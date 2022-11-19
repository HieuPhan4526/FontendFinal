import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import { Layout } from 'antd';
const { Sider} = Layout;
export default function UserDashboardTemplate(props) {
  return (
    <Route {...props} render={(propRoute) => {
      return <Fragment>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header {...propRoute} />
            <props.Component {...propRoute} />
          </Layout>
        </Layout>
      </Fragment>
    }} />
  )
}