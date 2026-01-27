class Goods {
  constructor(name, price, image, count) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.count = count;
  }
  draw() {
    const div = document.createElement("div");
    div.setAttribute("class", "goods");
    const h1 = document.createElement("h1");
    h1.textContent = this.name;
    const p = document.createElement("p");
    p.setAttribute("class", "price");
    p.textContent = this.price;

    const img = document.createElement("img");
    img.setAttribute("src", this.image);
    img.setAttribute("alt", this.name);
    img.setAttribute("width", 300);
    div.append(h1, p, img);
    return div;
  }
}
