import './Card.css'


/* This is basically a reusable wrapped that can be used 
    to wrap the elements with common css */

function Card (props) {

    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card