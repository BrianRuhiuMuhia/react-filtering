async function getData()
{
  try{
    let data= await fetch('https://fakestoreapi.com/products')
let result=await data.json()
return result
  }
  catch(error)
  {
    console.log(error)
    return 
  }


}
export default getData