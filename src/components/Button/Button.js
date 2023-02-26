import cx from 'classnames'
import classes from './Button.module.scss';

// const variant = 'stroke' | 'primary';
const Button = ({title, variant = 'stroke'}) => {

    return <button type="button" className={cx(classes.wrapper, !!variant && classes[`wrapper--variant-${variant}`])}>
        <div className={classes.title}>{title}</div>
    </button>
}

export default Button;