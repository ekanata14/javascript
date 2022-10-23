// PROMISE JAVASCRIPT
const state = {
    stock : {
        coffeeBeans : 100,
        water : 1000
    },
    isCoffeeMachineBusy : false    
}

const checkAvailability = ()=>{
    return new Promise((resolve, reject)=>{
        if(state.isCoffeeMachineBusy == false){
            resolve("Mesin kopi siap digunakan");
        } else{
            reject("Mesin kopi sedang digunakan, mohon menunggu");
        }
    });
}

const checkStock = () =>{
    return new Promise((resolve, reject)=>{
        state.isCoffeeMachineBusy = true;
        if(state.stock.coffeeBeans >= 30 && state.stock.water >= 250){
            resolve("Stock cukup, buat kopi");
        } else{
            reject("Stock tidak cukup, dibatalkan");
        }
    });
}

const boilWater = () =>{
    return new Promise((resolve, reject)=>{
        console.log("Memanaskan Air");
        setTimeout(() =>{
            resolve("Air panas sudah siap");
        }, 5000);
    })
}

const grindCoffeeBeans = () =>{
    return new Promise((resolve, reject)=>{
        console.log("Menggiling Biji");
        setTimeout(() =>{
            resolve("Biji kopi sudah siap");
        })
    })
}

const brewCoffee = ()=>{
    console.log("Membuatkan kopi Anda");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Kopi sudah siap");
        },3000);
    })
}

// checkStock().then(handleSuccess).catch(handleFailure);

function makeEspresso(){
    checkAvailability()
        .then((value)=>{
            console.log(value);
            return checkStock();
        }).then((value)=>{
            console.log(value);
            const promises = [boilWater(), grindCoffeeBeans()];
            return Promise.all(promises);
        })
        .then((value)=>{
            console.log(value);
            return brewCoffee();
        }).then((value)=>{
            console.log(value);
            state.isCoffeeMachineBusy = false;
        }).catch((rejected)=>{
            console.log(rejected);
            state.isCoffeeMachineBusy = false;
        });
}

makeEspresso();