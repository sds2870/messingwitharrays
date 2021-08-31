//   {
//     "id": 1,
//     "make": "Chrysler",
//     "model": "300",
//     "modelYear": 2011,
//     "color": "Aquamarine",
//     "numberOfDoors": 2,
//     "price": "$3141.86",
//     "vin": "JN1AZ4EH2DM632001"
//   }
// What a car object looks like





console.log(cars);

function createCarCard(currentCar) {
    let article = document.createElement("article");
    let header = document.createElement("header");
    let ul = document.createElement("ul");
    let priceItem = document.createElement("li");
    let doorCountItem = document.createElement("li");
    let colorItem = document.createElement("li");
    let vinItem = document.createElement("li");
    let removeButton = document.createElement("button");

article.classList.add("card");

    header.append(`${currentCar.make} ${currentCar.model} (${currentCar.modelYear})`);
    article.append(header);

    ul.append(priceItem, doorCountItem, colorItem, vinItem);
    article.append(ul);

    let priceLabel = document.createElement("strong");
    priceLabel.append("Price:");
    priceItem.append(priceLabel, `${currentCar.price}`);
    
    let carDoors = document.createElement("strong");
   carDoors.append("Door Count:");
    doorCountItem.append(carDoors, `${currentCar.numberOfDoors}`);
    
    let trueColor = document.createElement("strong");
    priceLabel.append("Color:");
    colorItem.append(trueColor, `${currentCar.color}`);
    
    let vinLabel = document.createElement("strong");
    vinLabel.append("VIN:");
    vinItem.append(vinLabel, `${currentCar.vin}`);

removeButton.append("Remove")
removeButton.classList.add("remove");
article.append(removeButton);

return article
}

let mainElement = document.querySelector("main");
for (let index = 0; index < cars.length; index += 1) {
    let currentCar = cars[index];
    
    let article = createCarCard(currentCar)   

mainElement.append(article);
}