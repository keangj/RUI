import * as React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const LayoutExample: React.FunctionComponent = () => {
  return (
      <Layout style={{height: 12}} className={'rrr'}>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
  )
};

export default LayoutExample;