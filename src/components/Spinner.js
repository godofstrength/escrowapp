import React, {Fragment} from 'react'
import spinner from '../spinner.gif'
const Spinner = () => <div style={{ height: '500px', position: 'relative', display: 'block'}}>
     <img style={{width: '100px', position:'absolute', top: '50%', left: '50%'}} src={spinner} alt='Loading...' ></img> 
</div>

export default Spinner;
