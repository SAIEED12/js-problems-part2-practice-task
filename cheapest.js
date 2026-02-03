const phones = [
    {name: "SAMSUNG", price: 20000, camera: "12mp", color: "black"},
    {name: "Xiaomi", price: 30000, camera: "12mp", color: "black"},
    {name: "HUAWEI", price: 10000, camera: "12mp", color: "black"},
    {name: "HTC", price: 40000, camera: "12mp", color: "black"},
    {name: "OPPO", price: 120000, camera: "12mp", color: "black"}
]

function getCheapestPhone(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}
console.log(getCheapestPhone(phones));