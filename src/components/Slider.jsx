import {useRef,useContext} from 'react'
import {AppContext} from '../App'

const Slider=()=>
{

const  {setWidth ,setSlider ,width}=useContext(AppContext)

const ref=useRef()
const bar=useRef()

const widthChange=()=>
{

	let w=Math.floor(100*(window.event.clientX-ref.current.offsetLeft)/ref.current.clientWidth)
	if(w<=100)
	setWidth( w)
	setSlider(bar.current.clientWidth/ref.current.clientWidth*100)
	

}






return(

 <div  className='bar' ref={ref}   ><div className='barGreen' ref={bar}  style={{ width:`${width+'%'}`}}>
  <img   className="barCircle"  onDrag={widthChange}     src="images/icon-slider.svg" />
</div>
</div>

)}
export default Slider