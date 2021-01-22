//Problem 01: Kilometer to Meter Cerversion
function kilometerToMeter(kilometer) {
  //Handling Negative Value
  if (kilometer < 0) {
    return "This value can't be negative";
  }
  //Converting Kilometer to Meter
  const meter = 1000;
  return kilometer * meter;
}

//Problem 02: A Simple Budget Calculator
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
  //Handling Negative Quantity
  if (watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0) {
    return "Please input the proper quantity value";
  }
  //Items Price
  const watchPrice = 50;
  const phonePrice = 100;
  const laptopPrice = 500;

  //Calculating the total price
  let totalPrice =
    watchPrice * watchQuantity +
    phonePrice * phoneQuantity +
    laptopPrice * laptopQuantity;
  return totalPrice;
}

//Problem 03: Hotel Cost Calculation
function hotelCost(stayingDays) {
  //Handling negative values
  if (stayingDays < 1) {
    return "Minimum staying days is one";
  }

  //Declearing the rent chart
  const rentOfFirstTenDays = 100;
  const rentOfSecondTenDays = 80;
  const rentOfAboveTweentyDays = 50;

  if (stayingDays >= 1 && stayingDays <= 10) {
    let totalHotelCost = stayingDays * rentOfFirstTenDays;
    return totalHotelCost;
  } else if (stayingDays >= 11 && stayingDays <= 20) {
    let costOfFirstTenDays = rentOfFirstTenDays * 10;
    let remainingDays = stayingDays - 10;
    let costOfRemainingDays = remainingDays * rentOfSecondTenDays;
    let totalHotelCost = costOfFirstTenDays + costOfRemainingDays;
    return totalHotelCost;
  } else {
    let costOfFirstTenDays = rentOfFirstTenDays * 10;
    let costOfSecondTenDays = rentOfSecondTenDays * 10;
    let remainingDays = stayingDays - 20;
    let costOfRemainingDays = remainingDays * rentOfAboveTweentyDays;
    let totalHotelCost =
      costOfFirstTenDays + costOfSecondTenDays + costOfRemainingDays;
    return totalHotelCost;
  }
}

//Problem 04: Find Maximum Friend Name According to Name Length
function megaFriend(friendsName) {

    //Empty Array Handling
  if (friendsName == "" || friendsName == null) {
    return "Empty Array";
  }
  let highestLength = 0;
  let longestName = "";
  for (let i = 0; i < friendsName.length; i++) {
    let name = friendsName[i];

    if (name != null && name != undefined) {
      // Handling Error Causes by null and undefined
      if (name.length > highestLength) {
        highestLength = name.length;
        longestName = name;
      }
    }
  }
  return longestName;
}
