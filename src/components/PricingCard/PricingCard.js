import classes from './PricingCard.module.scss';
import Button from "../Button";
const PricingCard = ({title, text, price, button, borderColor}) => {
    return <div className={classes.wrapper} style={{borderTop: `1px solid ${borderColor}`}}>
        <div className={classes.title}>{title}</div>
        <div className={classes.price}>{price}</div>
        <div className={classes.text}>{text}</div>
        <div className={classes.button}>{button}</div>
    </div>
}

export default PricingCard;