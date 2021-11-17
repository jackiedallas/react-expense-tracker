import './Card.css';

// created a wrapper component for expenses container
// props.children gives you the ability to create custom wrappers
function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;