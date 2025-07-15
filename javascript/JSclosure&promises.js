function Student(){
    let GPA = 3.10;
    let Name = "Marvin"

    function innerFunction() {
        console.log(GPA)// Accessing the outer Function
        console.log(Name)
    }
    return innerFunction
}

let closureFunction = Student();//closureFunction now holds the inner function
closureFunction();//output


//PROMISES IN JS
const myPromise = new Promise((resolve, reject) => {
    //Asynchronus task
    if(success){
        resolve(result);
    }else{
        reject(error);
    }
})

// Promise chaining
.then((result) => {
    //Handle successful result
})
.catch((error) => {
    //Handle the error
});

//Handling Multiple Promises
const promise1 = fetch(url1)
const promise2 = fetch(url2)

Promise.all([promise1,promise2])
.then (([response1, response2]) => {
    //Handle both respondes
})
.catch((error) => {
    //handle any error
})

//Await
async function fetchData(){
    try{
        const result = await myPromise;
        //handle the result
    }catch{
        //Handle the error 
    }
}