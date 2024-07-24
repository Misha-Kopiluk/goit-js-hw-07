const categories = document.querySelector("#categories");
const elCategori = categories.querySelectorAll(".item");
console.log(`Number of categories: ${elCategori.length}`);
elCategori.forEach((el) => {
    const categoriesEl = el.querySelector("h2").textContent;
    const categori = el.querySelectorAll("ul li");
    console.log(`category: ${categoriesEl}`);
    console.log(`Elements: ${categori.length}`);
}
);
