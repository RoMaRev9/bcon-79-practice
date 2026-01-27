// Потрібно виправити помилки, щоб код працював
const product = {
  price: 5000,
  showPrice() {
    console.log(this.price)
  },
}

function callAction(action) {
  action()
}

// =====================================================
callAction(product.showPrice)
