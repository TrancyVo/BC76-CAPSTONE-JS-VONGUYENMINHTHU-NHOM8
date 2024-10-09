window.onload = function () {
  const urlParam = new URLSearchParams(window.location.search);
  const myParam = urlParam.get("sneakerid");
  console.log(myParam);

  const promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
    method: "GET",
  });
  promise
    .then((res) => {
      console.log(res.data.content);
      const { image, name, price, size, relatedProducts, description } =
        res.data.content;
      const sneakerImg = document.getElementById("sneakerImg");
      sneakerImg.src = image;
      const sneakerName = document.getElementById("sneakerName");
      sneakerName.innerHTML = name;
      const sneakerPrice = document.getElementById("sneakerPrice");
      sneakerPrice.innerHTML = price;
      const sneakerDesc = document.getElementById("productDesc");
      sneakerDesc.innerHTML = description;

      const sneakerSize = document.getElementById("sizeItem");
      let content = "";
      for (let itemSize of size) {
        content += `
                  <div class="size_item">
                  <p>${itemSize}</p>
                </div>`;
      }
      sneakerSize.innerHTML = content;
      const relatedProduct = document.getElementById("product_list");
      let contentRelatedProduct = "";
      for (let product of relatedProducts) {
        const { image, name, price, id } = product;
        console.log(id);
        contentRelatedProduct += `
<div class="top_interesting_item col">
            <img src="${image}" alt="" />
            <div class="top_interesting_text">
              <p class="subtitle">SPORTY</p>
              <h3 class="text-uppercase">${name}</h3>
              <p>$${price}</p>
              <a href="./?sneakerid=${id}"><button class="buy_now">Buy Now</button> </a>
            </div>
          </div>
`;
      }
      relatedProduct.innerHTML = contentRelatedProduct;
    })
    .catch((err) => {
      console.log(err);
    });
};
