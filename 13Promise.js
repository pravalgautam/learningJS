// when we dont have promise bluebirl and q we use these

// promise take callback
const promiseOne = new Promise(function(resolve,reject){
    // do async task 
    // db calls crypto graphy netwoek calls

    setTimeout(function(){
        console.log('aync task complete')
        resolve()
    },1000)
 
    // what is  resolve,reject doing 
})

promiseOne.then(function(){
    console.log("promise consume");
    
})

// another way
// 2 promise
new Promise(function(resolve,reject){
 setTimeout(function(){
        console.log('aync task 2 complete')
        resolve()
    },1000)
}).then(function(){

})



const promisethree = new Promise(function(resolve,reject){
    // do async task 
    // db calls crypto graphy netwoek calls

    setTimeout(function(){
          resolve({userName: "pravl",email: "caji"})

    },1000)
 
    // what is  resolve,reject doing 
})
promisethree.then(function(user){
    console.log(user)
})


const promiseFour  = new Promise(function(resolve,reject){
    // do async task 
    // db calls crypto graphy netwoek calls

    setTimeout(function(){
        let error = true 
        if(!error){
               resolve({userName: "praval",email: "caj@gmail.comi"})
        }
        else{
             reject("error in something")
        }


    },1000)
 
    // what is  resolve,reject doing 
})
promiseFour.then((user)=>{
    console.log(user)
    return user.userName // where this goes 
}).then(function(userName){
    console.log(userName)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("rejected and aresolved")
})


// 
const promiseFive  = new Promise(function(resolve,reject){
    // do async task 
    // db calls crypto graphy netwoek calls

    setTimeout(function(){
        let error = false 
        if(!error){
               resolve({userName: "gautam",email: "caj@gml.comi"})
        }
        else{
             reject("error js went wrong something")
        }


    },1000)
 
    // what is  resolve,reject doing 
})

async function consumePromise(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log("error in async")
    }
}
consumePromise()



///////////////// api fetch using promise


async function getAllUSers(){
    try{
   const respponse = await fetch("https://api.github.com/users/pravalgautam")
   console.log(respponse)
   const data = await respponse.json()
    console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
// getAllUSers()

fetch("https://api.github.com/users/pravalgautam").then((user)=>{
return user.json()
})
.then((data)=>{
console.log(data)
})
.catch((error)=>{
console.log(error)
})