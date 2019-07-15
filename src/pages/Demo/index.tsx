import React, { Component, Fragment } from 'react';
import { Button as Zent } from 'zent';
import Btn from 'components/button';
import 'zent/css/index.css';
export default class Demo extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ marginLeft: 20 }}>
          <div style={{ marginTop: 20 }}>
            <Zent>按钮</Zent>
            <Zent type="primary">按钮</Zent>
            <Zent type="danger">按钮</Zent>
          </div>
          <div style={{ marginTop: 20 }}>
            <Btn className="test">按钮</Btn>
            <Btn disabled={true} type="primary">
              按钮
            </Btn>
            <Btn size="small" type="danger">
              按钮
            </Btn>
          </div>
        </div>
      </Fragment>
    );
  }
}
