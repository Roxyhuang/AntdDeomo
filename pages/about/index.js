import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import {Row, Col, Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
import s from './styles.css';

// import cx from 'classnames';

class AboutPage extends React.Component {

  static propTypes = {
  };

  componentDidMount() {

  }

  render() {
    return (
      <Layout>
        {/*<Row style={{width:"100%"}}>*/}
          {/*<Row type="flex" justify="center" style={{width:"100%"}}>*/}
            {/*<h3>*/}
              {/*<Col span={24}>*/}
                {/*简单表单*/}
              {/*</Col>*/}
            {/*</h3>*/}
          {/*</Row>*/}
          {/*<Form inline onSubmit={this.handleSubmit}>*/}
          {/*<Row type="flex" justify="space-around" gutter={32} >*/}


            {/*/!*<Form inline>*!/*/}
            {/*<Col xs={16} sm={16} md={10} >*/}
              {/*<FormItem>*/}
                {/*<Input addonBefore={<Icon type="user" />} placeholder="Username" />*/}
              {/*</FormItem>*/}
            {/*</Col>*/}
            {/*<Col xs={16} sm={16} md={10}>*/}
              {/*<FormItem>*/}
                {/*<Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />*/}
              {/*</FormItem>*/}
            {/*</Col>*/}
            {/*<Col xs={16} sm={16} md={10}>*/}
              {/*<FormItem>*/}
                {/*<Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />*/}
              {/*</FormItem>*/}
            {/*</Col>*/}
            {/*<Col xs={16} sm={16} md={10}>*/}
              {/*<FormItem>*/}
                {/*<Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />*/}
              {/*</FormItem>*/}
            {/*</Col>*/}
            {/*/!*</Form>*!/*/}
          {/*</Row>*/}
          {/*<Row type="flex" justify="center" gutter={32} >*/}
            {/*<Col order={2}>*/}
              {/*<FormItem>*/}
                {/*<Button type="primary" htmlType="submit">注册</Button>*/}
              {/*</FormItem>*/}
            {/*</Col>*/}
            {/*<Col order={1}>*/}
              {/*<FormItem>*/}
                {/*<Button type="primary" htmlType="submit">登陆</Button>*/}
              {/*</FormItem>*/}
            {/*</Col>*/}
          {/*</Row>*/}
          {/*</Form>*/}
        {/*</Row>*/}
        <Row style={{width:"100%"}}>
          <Row type="flex" justify="center" style={{width:"100%"}}>
            <h3>
              <Col span={24}>
                简单响应式
              </Col>
            </h3>
          </Row>
          <Row type="flex" justify="space-around">
            <Col className={s.block} xs={4} sm={4} md={4} lg={4}>Col</Col>
            <Col className={s.block} xs={0} sm={4} md={4} lg={4}>Col</Col>
            <Col className={s.block} xs={0} sm={0} md={4} lg={4}>Col</Col>
            <Col className={s.block} xs={0} sm={4} md={0} lg={4}>Col</Col>
          </Row>
        </Row>


      </Layout>
    );
  }

}

export default AboutPage;
