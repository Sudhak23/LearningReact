import React from 'react';
import Newgrowing from '../Newgrowing';


function Home() {

  const plantData1 = {
    name: 'rose',
    icon: 'rose',
    size: 50 ,
    aboutMe: [
      "Diverse varieties and colors",
      "Symbolism of love and romance",
      "Cultural significance and timeless beauty"
    ],

 }
 const plantData2 = {
  name: 'sunflower',
  icon: 'sunflower',
  size: 50 ,
  aboutMe: [
    1123,'hi','hello'
  ]

}
  return (
    <div>
        <h1>Welcome to home</h1>
        <Newgrowing plantdetails={plantData1}/>
        <Newgrowing plantdetails={plantData2} />
        <Newgrowing />
        
        
    </div>
  )
}

export default Home