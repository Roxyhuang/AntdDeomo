
import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import { Row, Col } from 'antd';
// import cx from 'classnames';
import s from './style.less';
import { title, html } from './index.md';


class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {

  }

  render() {
    return (
        <Layout>
          {/*<div className={cx(s.local123,s.local124)} >123</div>*/}
          <div style={{minHeight:"60rem"}}>
            <Row type="flex" justify="center">
              <Col span={24} style={{textAlign:"center"}}>
                <img className={s.userImg} src="http://fanaru.com/doge/image/18360-doge-doge-simple.jpg" />
              </Col>
              <Col span={24} style={{padding:"0 2em"}}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </Col>
            </Row>
         </div>
        </Layout>
    );
  }

}

export default HomePage;
