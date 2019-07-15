import React from 'react';
import classnames from 'classnames';
import 'assets/button/index.scss';
type ButtonTypes = 'primary' | 'danger' | 'success';
type ButtonSize = 'small' | 'large' | 'normal';
interface IButtonProps {
  type?: ButtonTypes;
  size?: ButtonSize;
  block?: boolean;
  disabled?: boolean;
  href?: string;
  target?: '_blank' | '_self';
  className?: string;
  style?: React.CSSProperties;
}
export default class Button extends React.Component<IButtonProps> {
  render() {
    let {
      children,
      type,
      size,
      block,
      disabled = false,
      href,
      target = '_blank',
      className,
      style
    } = this.props;
    let classes = classnames(
      'qzz-btn',
      {
        [`qzz-btn-${type}`]: type,
        [`qzz-btn-${size}`]: size,
        [`qzz-btn-block`]: block
      },
      className
    );
    let child;
    if (href) {
      child = (
        <a href={href} target={target}>
          {children}
        </a>
      );
    } else {
      child = <span>{children}</span>;
    }
    return (
      <button style={style} disabled={disabled} className={classes}>
        {child}
      </button>
    );
  }
}
