import classes from './BenefitCard.module.scss';
const BenefitCard = ({title, text, url}) => {
    return <div className={classes.wrapper}>
        <div className={classes.icon}>
            <img src="/images/icons/benefit.svg" alt=""/>
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.text}>{text}</div>
        <a href={url} className={classes.more}>Learn more</a>
    </div>
}

export default BenefitCard;