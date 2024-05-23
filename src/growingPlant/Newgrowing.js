import React,{useState, useEffect} from 'react'
import './GrowingPlant.scss';

function Newgrowing(props) {
   

    const plantData={
        name: 'default data',
        icone: 'no icon',
        size: 50,
        aboutMe:[
            "hi",89
        ]
    }

    useEffect(()=>{
      console.log('mycode');
    },[])

   

    //object destructing
    // const name ={
    //     first: 'tamil',
    //     last: 'sudha'
    // }
    // const { first, last, color} = name
    // console.log(name.first, name.last, first, last, color)
    //if plants details is availabl it will use it other wise it will use plandata
     //destrucring

    const { plantdetails = plantData } = props;

    //conditional rendring
    let { name, size, icon, aboutMe } = plantdetails;

    //array destruring 

    const[dynamicSize, setDynamicSize] = useState(size) //ui change, rerender
    

    const handleClick = () =>{
      //console.log("handle clicked")
      setDynamicSize(dynamicSize + 20)

    }
    useEffect(()=>{
      console.log('dynsmic changed',dynamicSize)
    },[dynamicSize])
    

  return (
    <div className='plant'>
        <h1>I am a {name}, I'm growing </h1>

         

        {/* conditional rendring  */}
        { name ==='rose' ? <div>this is conditional </div> :
        <div> this is not </div> 
        }

        <div><span style={{fontSize: `${dynamicSize}px`}}> {icon} </span>
        </div>
        <button onClick={handleClick}>give water</button>

        {/* {aboutMe.map((data) => <div>{data}</div>)}  */}
        {aboutMe.map((points, index) => <div key={index}> {index+1}.{points} </div>)}

    </div>
  )
}

export default Newgrowing