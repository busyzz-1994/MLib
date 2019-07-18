import React from 'react';
import classnames from 'classnames';
import { Omit } from 'utility-types';
import 'assets/button/index.scss';
type ButtonTypes = 'primary' | 'danger' | 'success';
type ButtonSize = 'small' | 'large' | 'normal';

interface IButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: ButtonTypes;
  size?: ButtonSize;
  block?: boolean;
  disabled?: boolean;
  href?: string;
  target?: '_blank' | '_self';
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
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
      style,
      onClick,
      ...rest
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
      <button
        onClick={e => {
          onClick && onClick(e);
        }}
        style={style}
        disabled={disabled}
        className={classes}
        {...rest}
      >
        {child}
      </button>
    );
  }
}
