import * as React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Sider from "./sider";
import './layout.example.scss'

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <h3>example1</h3>
      <Layout style={{height: 300}} className={'layout'}>
        <Header className={'header'}>header</Header>
        <Content className={'content'}>content</Content>
        <Footer className={'footer'}>footer</Footer>
      </Layout>

      <h3>example2</h3>
      <Layout style={{height: 300}} className={'layout'}>
        <Header className={'header'}>header</Header>
        <Layout>
          <Sider className={'sider'}>sider</Sider>
          <Content className={'content'}>content</Content>
        </Layout>
        <Footer className={'footer'}>footer</Footer>
      </Layout>

      <h3>example3</h3>
      <Layout style={{height: 300}} className={'layout'}>
        <Header className={'header'}>header</Header>
        <Layout>
          <Content className={'content'}>content</Content>
          <Sider className={'sider'}>sider</Sider>
        </Layout>
        <Footer className={'footer'}>footer</Footer>
      </Layout>

      <h3>example4</h3>
      <Layout style={{height: 300}} className={'layout'}>
        <Sider className={'sider'}>sider</Sider>
        <Layout className={'layout'}>
          <Header className={'header'}>header</Header>
          <Content className={'content'}>content</Content>
          <Footer className={'footer'}>footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
};

export default LayoutExample;