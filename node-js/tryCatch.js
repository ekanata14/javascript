// TRY CATCH JAVASCRIPT

// Custom Error
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "Validation Error";
    }
}


let json = '{"name" : "Gakure"}';

try{
    console.log("Awal blok try");
    console.log("--------------------------");
    // If there are some error, it will go to catch block directly
    
    let user = JSON.parse(json);

    if(!user.name){
        throw new ValidationError("'name' is required");
    }

    if(!user.age){
        throw new ValidationError("'age' is required");
    }

    console.log(user.name);
    console.log(user.age);

    console.log("--------------------------");
    console.log("Akhir Blok Try");
} catch(error){
    console.log("ADA ERROR BOSS!!!");
    if(error instanceof SyntaxError){
        console.log(`JSON Error: ${error.message}`);
    } else if(error instanceof ValidationError){
        console.log(`Invalid Data: ${error.message}`);
    } else if(error instanceof ReferenceError){
        console.log(error.message);
    } else{
        console.log(error.stack);
    }
} finally{
    console.log("WILL BE EXECUTED NO MATTER WHAT!!!!!");
}

