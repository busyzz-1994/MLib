import React from 'react';
import classNames from 'classnames';
import './index.scss';
export type DotSize = 'default' | 'large' | 'small';
interface IDot {
  size: DotSize;
}
export default class Dot extends React.Component<IDot> {
  render() {
    let { size } = this.props;
    return (
      <span
        className={classNames('qzz-spin-dot', `qzz-spin-dot-spin`, {
          [`qzz-spin-dot-${size}`]: size
        })}
      >
        <i className={`qzz-spin-dot-item`} />
        <i className={`qzz-spin-dot-item`} />
        <i className={`qzz-spin-dot-item`} />
        <i className={`qzz-spin-dot-item`} />
      </span>
    );
  }
}
