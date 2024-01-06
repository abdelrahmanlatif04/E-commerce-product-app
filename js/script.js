// nav
let cartBtn = document.querySelector("#cart-btn");
let cartNote = document.querySelector("#cart-note");
let emptyCart = document.querySelector(".empty-cart");
let filledCart = document.querySelector(".filled-cart");
let cartP = document.querySelector(".cart-p");
let deleteBtn = document.querySelector("#delete-btn");
let checkBtn = document.querySelector("#checkout-btn");
let cartCounter = document.querySelector("#cart-btn-counter");

// viewer
let mainViewer = document.querySelector(".viewer");
let mainThumbnails = document.querySelectorAll(".thumbnail");

// lightbox
let lightBox = document.querySelector(".lb");
let lbCloseBtn = document.querySelector(".close-btn");
let lbViewer = document.querySelector(".lb-viewer");
let lbThumbnails = document.querySelectorAll(".lb-thumbnail");
// input field
let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let field = document.querySelector(".value");
let amount = 0;
let addToCartBtn = document.querySelector("#add-to-cart-btn");
field.innerHTML = amount;

cartBtn.addEventListener("click", () => {
  if (cartNote.style.display == "flex") {
    cartNote.style.display = "none";
  } else {
    cartNote.style.display = "flex";
  }
});

for (let i = 0; i < mainThumbnails.length; i++) {
  mainThumbnails[i].addEventListener("mouseover", () => {
    viewing(i, mainViewer, mainThumbnails);
  });
}
for (let i = 0; i < lbThumbnails.length; i++) {
  lbThumbnails[i].addEventListener("click", () => {
    console.log(lbThumbnails[i]);
    viewing(i, lbViewer, lbThumbnails);
  });
}

// plus & minus input field

plusBtn.addEventListener("click", () => {
  if (amount <= 9) {
    amount += 1;
  }
  field.innerHTML = amount;
  cartCounter.innerHTML = amount;
});
minusBtn.addEventListener("click", () => {
  if (amount >= 1) {
    amount -= 1;
  }
  field.innerHTML = amount;
  cartCounter.innerHTML = amount;
});

// close & open lightbox
mainViewer.addEventListener("click", () => {
  lightBox.style.display = "inline";
});
lbCloseBtn.addEventListener("click", () => {
  lightBox.style.display = "none";
});

addToCartBtn.addEventListener("click", () => {
  if (amount != 0) {
    emptyCart.style.display = "none";
    filledCart.style.display = "flex";
    cartP.innerHTML = `Fall limited edition sneakers $125 ×
        <span> ${amount} <strong> $${amount * 125} </strong></span>`;
  } else {
    emptyCart.style.display = "flex";
    filledCart.style.display = "none";
  }
  cartNote.style.display = "flex";
});
deleteBtn.addEventListener("click", () => {
  emptyCart.style.display = "flex";
  filledCart.style.display = "none";
  cartNote.style.display = "none";
});
checkBtn.addEventListener("click", reset);

// functions

function reset() {
  location.reload();
}

// the thumbnail function
function viewing(x, viewer, thumbnails) {
  viewer.style.backgroundImage = `url('../images/image-product-${x + 1}.jpg')`;
  for (let j = 0; j < thumbnails.length; j++) {
    thumbnails[j].style.border = "none";
  }
  thumbnails[x].style.border = "3px solid var(--primary-color1)";
}
