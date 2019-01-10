var tea = {
  leaves: "black",
  water: "hot",
  quantity: 5,
  milk: false,
  burnYou() {

  },
  getDrank: function(quantity = 1) {
    if (this.quantity > 0 ){
      this.quantity -= quantity;
    } else {
      console.log("get more 🍵");
    }
  },
  spill: function() {
    this.quantity = 0;
    console.log("🍵🕸️");
  }
}

setInterval(function() {
  console.log("quanitiy", tea.quantity);
  tea.getDrank();
}, 1000);

// tea.getDrank();
// console.log("quanitiy", tea.quantity);
// tea.spill();

