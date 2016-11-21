/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import { Col,Row } from 'antd';
import style from './styles.css';


class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {

  }

  render() {
    return (
          <Row type="flex" justify="center">
            <Col span={24} className={style.bigTitle} style={{textAlign:"center"}}>
              基于antd进行响应式开发1
            </Col>
          </Row>
    );
  }

}

export default HomePage;
