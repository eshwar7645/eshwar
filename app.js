const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "TAG HUER",
    price: 59999,
    colors: [
      {
        code: "black",
        img: "./img/watch2.png", // Replace with correct path if needed
      },
      {
        code: "brown",
        img: "./img/watch1_alt.png", // Add alternate image if available
      },
    ],
  },
  {
    id: 2,
    title: "TAG HEUER",
    price: 59999,
    colors: [
      {
        code: "silver",
        img: "./img/watch2.png",
      },
      {
        code: "blue",
        img: "./img/watch2_alt.png",
      },
    ],
  },
  {
    id: 3,
    title: "TAG HEUER",
    price: 59999,
    colors: [
      {
        code: "silver",
        img: "./img/watch2.png",
      },
      {
        code: "blue",
        img: "./img/watch2_alt.png",
      },
    ],
  },
  {
    id: 4,
    title: "TAG HEUER",
    price: 59999,
    colors: [
      {
        code: "silver",
        img: "./img/watch2.png",
      },
      {
        code: "blue",
        img: "./img/watch2_alt.png",
      },
    ],
  },
  {
    id: 5,
    title: "TAG HEUER",
    price: 59999,
    colors: [
      {
        code: "silver",
        img: "./img/watch2.png",
      },
      {
        code: "blue",
        img: "./img/watch2_alt.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the chosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs." + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
