import Footer from './components/Footer'
import Head from './components/Head'
import Button from './components/Button'
import Slider from './components/Slider'
import Toggle from './components/Toggle'
import {useState,createContext,useEffect} from 'react'

export const AppContext=createContext({})

function App() {

const [toggle,setToggle]=useState(false)
const [width,setWidth]=useState(51)
const [slider,setSlider]=useState(51)

const count=()=>
{


	if(slider<=20)
		return 8
	else if(slider>20 && slider<=40)
		return 12
	else if(slider>40 && slider<=60)
		return 16
	else if(slider>60 && slider<=80)
		return 24
	else if(slider>80 && slider<=100)
		return 36


	

}


const views=()=>
{

	if(slider<=20)
		return  ' 10K'
	else if(slider>20 && slider<=40)
		return  ' 50K' 
	else if(slider>40 && slider<=60)
		return   '100K'
	else if(slider>60 && slider<=80)
		return   '500k'
	else if(slider>80 && slider<=100)
		return     '1M'

}
   

  return (<>
<AppContext.Provider value={{ count,views, toggle,setToggle , slider , setWidth ,setSlider ,width}}>


<Head/>

<main>
  <div className="topPart">

		<div className='infoBar'>
		 	<div className='views' > {views()} Pageviews</div>
			 
			  <div className='price'>
			  	<span className='count'> ${ toggle? count()*0.75:   count()}.00</span>
			  	<span  > / month</span>
			  </div>

		 <Slider />
		</div>

	<Toggle/>
</div>


<Button />
</main>

<Footer/>

</AppContext.Provider>

 </> );}


export default App;
