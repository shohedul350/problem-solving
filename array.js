// const showProduct = [
// {_id:1,name:"pro1",stock:10},
// {_id:2,name:"pro2",stock:8},
// {_id:3,name:"pro3",stock:15},
// {_id:4,name:"pro4",stock:12},
// ]

// const cardProduct = [
//     {_id:1,name:"pro1",stock:8},
//     {_id:2,name:"pro1",stock:6},
//     {_id:3,name:"pro1",stock:15},
//     ]



//    function currentStock(id,sel){
//         let tempProduct = [...showProduct];
//         const selectedProduct = tempProduct.find(item =>  item._id === id);
//         const index = tempProduct.indexOf(selectedProduct);
//         const product = tempProduct[index];
//         product.stock = product.stock - sel;
//         delete product.name
//         console.log(tempProduct)
//        }

//        currentStock(2,8)


// // const oldStock=showProduct.map(product=>{
// //    return{ product.stock,{product._id} }
// // })

// // console.log(oldStock)
// // const saleStock=cardProduct.map(product=>{
// //     product
// // })
// // console.log(cardProduct)

// const allProducts = [
// [{_id:1,name:"pro1",qty:1,price:10},
// {_id:2,name:"pro2",qty:1,price:10}], 

// [{_id:4,name:"pro4",qty:1,price:10},
// {_id:2,name:"pro2",qty:1,price:10}], 

// [{_id:1,name:"pro1",qty:1,price:10},
// {_id:8,name:"pro7",qty:2,price:10}], 
// ]


// let newArray = []
// for (let i = 0; i < allProducts.length; i++) {
          
//     allProducts[i].map(pro=>{
//         newArray.push(pro)
//     })

//   }



  
  
  // let res = newArray.map(itm=>{
  //   return itm._id.filter((item, index) => arr.indexOf(item) != index)
  // //  itm.filter((item, index) => itm.indexOf(item) != index)
  // })
  // console.log(res)
  // let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

  // console.log(newArray)



// const orderTotal = order=>{
//   const totalItems = order
//   .reduce((pre,cur)=>pre + (cur.price*cur.qty),0)
//  console.log(totalItems)
// }

// orderTotal(newArray)

// 

function calculator(floor){

  let allEit = 0

      if(floor <= 10){
        allEit = floor*15
      }
      else if(floor <= 20){

        allEit = (10*15) +  ((floor-10)*12)
      } 
       else {
        allEit = (10*15) +  (10*12) + (floor-20)*10
      }

 console.log(allEit*1000) 
}


calculator(50)




