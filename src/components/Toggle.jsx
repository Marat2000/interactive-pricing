import {useContext} from 'react'
import {AppContext} from '../App'
const Toggle=()=>
{

const {toggle,setToggle}=useContext(AppContext)

	return(

<div className="togglePart">
  <span>Monthly Billing</span>
  <div className={toggle?'toggle toggleClicked':'toggle'} onClick={()=>setToggle(!toggle)}>
  	<div className={toggle?"circle circleClicked":"circle"}></div>
  	 </div>
  <span>Yearly Billing </span>
  <span className="discount desktop">25% discount</span>
 	<span className="discount mobile">-25%</span>
</div>

)}
export default Toggle