  /**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import { Col,Row } from 'antd';
import Link from '../Link';
import style from './Header.css';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header>
        <Row type="flex" justify="center">
          <Col span={24} className={style.bigTitle}>
            基于antd进行响应式开发
          </Col>
        </Row>
     </header>
    );
  }

}

export default Header;
