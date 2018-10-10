import React, { Component } from 'react';
import './Footer.scss';

import { Row, Col} from 'antd';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="footer">&copy;&nbsp; 2018 ReactNews. All Rights Reserved</Col>
        </Row>
      </div>
    )
  }
}
