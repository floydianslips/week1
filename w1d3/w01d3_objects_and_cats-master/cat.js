var cats = {
  beans: {
    name: "beans",
    stripes: true,
    color: "brown",
    age: 20
  },
  sammich: {
    name: "sammich",
    stripes: false,
    color: "brown",
    age: 12,
    vetTripHistory: {
      lastVisit: "last year",
      angerLevel: Infinity,
    }
  },
  princessPeach: {
    name: "princessPeach",
    personalitites: ["hungry", "needy", "creepy"],
    age: "🖕"
  }
};

// console.log(cats.beans.age);
// console.log(cats.sammich.vetTripHistory.angerLevel);
// cats.princessPeach.color = "white";
// console.log(cats.princessPeach.color);
// console.log(cats.princessPeach.personalitites[1]);

// console.log(cats.$.name);

for (var key in cats) {
  var cat = cats[key];
  console.log(cat.name+"'s age is "+cat.age);
}