let data = [
  {
    group_id: "1B2114",
    products: [
      {
        id: 1122,
        available: 1,
        already_uploaded: 3,
        variant_id: null,
        product_id: null,
        inventory_item_id: null,
      },
      {
        id: 1133,
        available: 0,
        already_uploaded: 1,
        variant_id: 9876,
        product_id: 4567,
        inventory_item_id: 1234,
      },
      {
        id: 1144,
        available: 1,
        already_uploaded: 1,
        variant_id: 1155,
        product_id: 8877,
        inventory_item_id: 5612,
      },
    ],
  },
  {
    group_id: "1B2187",
    products: [
      {
        id: 9089,
        available: 0,
        already_uploaded: 1,
        variant_id: 7564,
        product_id: 9879,
        inventory_item_id: 7657,
      },
      {
        id: 9034,
        available: 0,
        already_uploaded: 3,
        variant_id: 9878,
        product_id: 6521,
        inventory_item_id: 8923,
      },
      {
        id: 9055,
        available: 0,
        already_uploaded: 0,
        variant_id: null,
        product_id: null,
        inventory_item_id: null,
      },
    ],
  },
];

let isDeleted = []
let isDraft = []

let productData = data.forEach((productObjData) => {
  productObjData.products.forEach((productsVariantData) => {
    if (
      productsVariantData.already_uploaded === 3 &&
      productsVariantData.variant_id === null &&
      productsVariantData.product_id === null
    ) {
      isDeleted.push(productsVariantData)
    }
    if (productsVariantData.available === 0) {
      isDeleted.push(productsVariantData)
    }
  })
})
console.log("Deleted Product's:", isDeleted);
// console.log(productData);




let filteredData = data.map((productObjData) => {
  return {
    products: productObjData.products.filter((productsVariantData) => {
      return !isDeleted.some(deletedProduct => deletedProduct.id === productsVariantData.id);
    }),
  };
});

console.log("Filtered Products:", filteredData);



// console.log(data);
































// let isProductData = data[0].products.forEach((productsVariantData) => {
//   // console.log(productsVariantData);

//   if (productsVariantData.already_uploaded === 3 &&
//     productsVariantData.variant_id === null &&
//     productsVariantData.product_id === null
//   ) {
//     isDeleted.push(productsVariantData)
//   }
//   if (productsVariantData.available === 0) {
//     isDraft.push(productsVariantData)
//   }

// });





// let isProductData2 = data[1].products.forEach((productVariantsData2) => {
//   console.log(productVariantsData2);
// })


