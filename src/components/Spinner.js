import React, {Fragment} from 'react'
import spinner from '../spinner.gif'
const Spinner = (props) => {
return (<div style={{ height: props.height, position: 'relative', display: 'block'}}>
     <img style={{width: props.width, position:'absolute', top: props.top, left: props.left}} src={spinner} alt='Loading...' ></img> 
</div>)}

Spinner.defaultProps = {
     height: '500px',
     width: '100px',
     top: '50%',
     left: '50%'
}

export default Spinner;
