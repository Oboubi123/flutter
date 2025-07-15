
//Example with promise
function fetchDataFromServer(){
    return new Promise((resolve,reject) => {
        //
        setTimeout(() => {
            const success =true;
            if(success){
                const data = {id:1, Name:"Edusei", age:30}
                resolve(data);
            }else{
                reject(new Error("Failed to fetch data."));
            }
        }, 2000);
    })
}

//we are now going to fetch the data
fetchDataFromServer()
.then((data) =>{
   console.log("Data fetched successfully:", data) 
})
.catch((error) => {
    console.error("Error fetching the data :", error.message)
})
//Await
async function fetchData(){
    try{
        const data = await fetchDataFromServer();
        console.log("Data fetched successfully:",data);
    }catch(error){
        console.error("Error fetching data:", error.message)
    }
}