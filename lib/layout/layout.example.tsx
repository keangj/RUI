import * as React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Sider from "./sider";

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <h3>example1</h3>
      <Layout style={{height: 300}} className={'rrr'}>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
      <h3>example2</h3>
      <Layout style={{height: 300}} className={'rrr'}>
        <Header>header</Header>
        <Layout>
          <Sider>sider</Sider>
          <Content>content</Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
      <h3>example3</h3>
      <Layout style={{height: 300}} className={'rrr'}>
        <Header>header</Header>
        <Layout>
          <Content>content</Content>
          <Sider>sider</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
      <h3>example4</h3>
      <Layout style={{height: 300}} className={'rrr'}>
        <Sider>sider</Sider>
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
};

export default LayoutExample;