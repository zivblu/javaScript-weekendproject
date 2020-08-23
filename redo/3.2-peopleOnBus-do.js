let mapStops = new Map();
mapStops.set(10, 0);
mapStops.set(5, 3);
mapStops.set(4, 4);
mapStops.set(3, 8);
mapStops.set(0, 2);

const inBus = (Stops) =>{
    let people=0;
    for (let[key, value]  in Stops){
        people += key;
        people -=value;
    }
    return people;
}

console.log(inBus(mapStops));