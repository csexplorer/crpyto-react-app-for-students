import cx from 'classnames'
import classes from './MenuItem.module.scss';
const MenuItem = ({title, active}) => {

    return <a className={cx(classes.wrapper, !!active && classes.wrapperActive)}>
        {title}
    </a>
}

export default MenuItem;