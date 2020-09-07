const URL_listas = "https://api.nytimes.com/svc/books/v3/lists/names?api-key=SSD9FfRP9CMHdbUt2fTmYDrnMQx7Mjqf"

export async function getListName (){
  try {
    const response = await fetch (URL_listas, {method: 'GET'})
    const json = await response.json();
    return await json;
  }catch(error){
      console.log(error);
  }
}
