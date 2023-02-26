import classes from './FeatureCard.module.scss';
import cx from 'classnames'
const FeatureCard = ({title, text, align = 'left'}) => {
    return <div className={cx(classes.wrapper, align === 'right' && classes.wrapperRightAligned)}>
        <div className={classes.icon}>
            <div className={classes.iconInner} />
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.text}>{text}</div>

    </div>
}

export default FeatureCard;