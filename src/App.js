import Header from "./Components/Header";
import Shop from "./Components/Shop";
import {useState} from 'react';
function App() {
  const [cart,setCart]=useState([]);
    const minusHandler=(id)=>{
      setCart(prevData => {
    const index = prevData.findIndex(item => item.id === id);
    if (index !== -1 && prevData[index].count > 0) {
      const updatedData = [...prevData];
      updatedData[index] = { ...updatedData[index], count: updatedData[index].count - 1 };
      if(updatedData[index].count===0){
        updatedData.splice(index,1);
      }
      return updatedData;
    }
    return prevData;
  });
}
   const plusHandler=(id)=>{
    setCart(prevData => {
    const index = prevData.findIndex(item => item.id === id);
    if (index !== -1) {
      const updatedData = [...prevData];
      updatedData[index] = { ...updatedData[index], count: updatedData[index].count+1 };
      return updatedData;
    }
    return prevData;
  });
   
 }
  const getDataHandler=(data)=>{
          const filteredData=cart.find(item=>item.id===data.id);
           if(filteredData){
            filteredData.count+=1;
            setCart((prevData)=>{
              return [...cart];
            })
           }
           else{
        setCart((prevData)=>{
          return(
            [...prevData,data]
          )
        })
      }
  }
  console.log(cart);

  return (
    <div>
      <Header goData={cart} add={plusHandler} minus={minusHandler}/>
      <Shop toGetData={getDataHandler}/>
    </div>
  );
}

export default App;
