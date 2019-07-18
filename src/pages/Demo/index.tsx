import React, { Component, Fragment } from 'react';
// import { Loading as Zent } from 'zent';
import Btn from 'components/button';
// import Loading from 'components/loading';
import 'zent/css/index.css';
// import styles from './index.module.scss';
// import { Spin } from 'antd';
import 'antd/dist/antd.css';
export default class Demo extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  handleLoading = () => {
    this.setState(prevState => ({
      loading: !prevState.loading
    }));
  };
  componentDidMount() {}

  render() {
    // let { loading } = this.state;
    return (
      <Fragment>
        <div style={{ marginLeft: 20 }}>
          <div style={{ marginTop: 20 }}>1</div>
          <div style={{ marginTop: 20 }}>2</div>
          <div style={{ marginTop: 20 }}>
            <Btn onClick={this.handleLoading}>toggle</Btn>
          </div>
        </div>
      </Fragment>
    );
  }
}
