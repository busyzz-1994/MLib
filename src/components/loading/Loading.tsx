import React from 'react';
import Dot from './dot';
import { DotSize } from './dot';
import classNames from 'classnames';
interface SpinProps {
  spinning?: boolean;
  size?: DotSize;
  delay?: number;
  tip?: string;
  wrapperClassName?: React.CSSProperties;
  indicator?: React.ReactElement;
}
interface SpinState {
  spinning?: boolean;
}
function shouldDelay(spinning: boolean, delay: number): boolean {
  return !!spinning && !!delay && !isNaN(Number(delay));
}
function renderIndicator(props: SpinProps) {
  let { size, tip, indicator } = props,
    ele = <Dot size={size as DotSize} />,
    currentTip = tip ? tip : defaultTip;
  if (React.isValidElement(defaultIndicator)) {
    ele = React.cloneElement(defaultIndicator as React.ReactElement, {
      className: classNames(
        (defaultIndicator as React.ReactElement).props.className,
        'qzz-spin-indicator'
      )
    });
  }
  if (React.isValidElement(indicator)) {
    ele = React.cloneElement(indicator as React.ReactElement, {
      className: classNames(
        (indicator as React.ReactElement).props.className,
        'qzz-spin-indicator'
      )
    });
  }
  return (
    <div className={classNames('qzz-spin-spinning')}>
      {ele}
      {currentTip ? (
        <div className={classNames('qzz-spin-spinning-text')}>{tip}</div>
      ) : null}
    </div>
  );
}
let defaultIndicator: React.ReactElement = null;
let defaultTip: string = '';
export default class Loading extends React.Component<SpinProps, SpinState> {
  static defaultProps = {
    spinning: true
  };
  static setDefaultIndicator = (indicator: React.ReactElement) => {
    defaultIndicator = indicator;
  };
  static setDefaultTip = (tip: string) => {
    defaultTip = tip;
  };
  constructor(props) {
    super(props);
    let { spinning, delay } = this.props,
      shouldSign = shouldDelay(spinning, delay);
    this.state = {
      spinning: spinning && !shouldSign
    };
  }
  timer: any = null;
  componentDidMount() {
    this.updateSpining();
  }
  componentDidUpdate(prevProps, prevState) {
    let delay = this.props.delay;
    if (prevProps.spinning) delay = 0;
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setTimeout(() => {
      this.updateSpining();
    }, delay || 0);
  }
  updateSpining = () => {
    const { spinning } = this.props;
    const { spinning: currentSpinning } = this.state;
    if (spinning !== currentSpinning) {
      this.setState({
        spinning
      });
    }
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    let { size = 'default', children, wrapperClassName } = this.props;
    let { spinning } = this.state;
    let ele = null;
    ele = spinning && renderIndicator(this.props);
    if (children) {
      ele = (
        <div className={classNames('qzz-spin-container', wrapperClassName)}>
          {spinning ? (
            <div className="qzz-spin-spinning-box">
              {renderIndicator(this.props)}
            </div>
          ) : null}
          <div className={classNames({ 'qzz-spin-children-box': spinning })}>
            {children}
          </div>
        </div>
      );
    }
    return ele;
  }
}
