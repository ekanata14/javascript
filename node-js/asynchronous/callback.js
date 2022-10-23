const orderFood = () =>{
    let food = null;
    console.log("Sedang membuat masakan, silakan tunggu");
    setTimeout(()=>{
        food = "Masakan sudah jadi";
        callback(food);
    }, 3000);
}

orderFood(food =>{
    console.log(food);
});