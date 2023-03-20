import {useRef,useContext,useEffect} from 'react'
import {AppContext} from '../App'

const Slider=()=>
{

const  {setWidth, count,views,setSlider,slider ,width}=useContext(AppContext)

const ref=useRef()
const bar=useRef()

const dragChange=()=>
{

	let w=Math.floor(100*(window.event.clientX-ref.current.offsetLeft)/ref.current.clientWidth)
	if(w<=100)
	setWidth( w)
}


const clickChange=()=>
{

	let w=Math.floor(100*(window.event.clientX-ref.current.offsetLeft)/ref.current.clientWidth)
	if(w<=20)
	setWidth(0)
	else if(w>20 && w<=40)
		setWidth(25)
	else if(w>40 && w<=60)
		setWidth(50)
	else if(w>60 && w<=80)
		setWidth(75)
	else if(w>80 && w<=100)
		setWidth(100)
}

	
 useEffect(()=>{ setSlider(Math.floor(bar.current.clientWidth/ref.current.clientWidth*100))},[width])



return(

 <div  className='bar' ref={ref}  onClick={e=>{clickChange(); e.preventDefault() }} ><div className='barGreen' ref={bar}  style={{ width:`${width+'%'}`}}>
  <img   className="barCircle"  onDrag={dragChange}     src="images/icon-slider.svg" alt=""/>
</div>
</div>

)}
export default Slider