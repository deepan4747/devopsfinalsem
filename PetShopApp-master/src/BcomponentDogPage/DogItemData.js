function starfive(props) {
  return (<div>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          </div>)
}

function starzero(props) {
  return (<div>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          </div>)
}

function starfour(props) {
  return (<div>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          </div>)
}

function starthree(props) {
  return (<div>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          </div>)
}

const Data = [
    {
      id: "1",
      category: "dry",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/30770-1569515029_129d1da2-55ab-4baf-b489-87e5ba98ffa4_500x.jpg?v=1575914753",
      p: "Diamond Naturals Chicken & Rice Formula All Life Stages Dry Dog Food",
      price: "$46.991",
      star: starfive(),
      otzyvy: "5.0",
      countotzyvov: "(682)",
    },
    {
      id: "2",
      category: "wet",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/fromm-dog-can-12_2-chicken-rice-072705119226_500x.jpg?v=1615901172",
      p: "From Chicken & Rice Paté Food for Dogs",
      price: "$3.19",
      star: starzero(),
      cssimg: {padding: 30},
      otzyvy: "0.0",
      countotzyvov: "(0)",
    },
    {
      id: "3",
      category: "bowl",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/31060-1463596338_c9441c7e-bb0a-4097-b32e-d365431effb6_500x.jpg?v=1571450689",
      p: "Loving Pets Merlot Bella Bowl",
      price: "$4.99",
      star: starfour(),
      otzyvy: "5.0",
      countotzyvov: "(682)",
    },
    {
      id: "4",
      category: "clean",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/46695-1614191278_500x.jpg?v=1644533011",
      p: "Petmate Precision Pet Little Stinker House Puppy Training Pad 24X2",
      price: "$24.99",
      star: starthree(),
      otzyvy: "3.0",
      countotzyvov: "(3)",
    },
    {
      id: "5",
      category: "toy",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/33989-1568390790_1600x.jpg?v=1571450531",
      p: "KONG AirDog Squeakair Ball Dog Toy",
      price: "$3.99",
      star: starfour(),
      otzyvy: "4.0",
      countotzyvov: "(96)",
    },
    {
      id: "6",
      category: "toy",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/38315-1568324584_1600x.jpg?v=1571450662",
      p: "KONG Plush Teddy Bear Dog Toy",
      price: "$3.29",
      star: starfive(),
      otzyvy: "5.0",
      countotzyvov: "(5)",
    },
    {
      id: "7",
      category: "toy",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/30841-1568393663_800x.jpg?v=1571450777",
      p: "KONG Classic Dog Toy",
      price: "$11.99",
      star: starfive(),
      otzyvy: "5.0",
      countotzyvov: "(48)",
    },
    {
      id: "8",
      category: "toy",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/33988-1568390985_800x.jpg?v=1571450817",
      p: "KONG Puppy Toy",
      price: "$16.29",
      star: starfour(),
      otzyvy: "4.0",
      countotzyvov: "(44)",
    },
    {
      id: "9",
      category: "toy",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/38290-1568388185_800x.jpg?v=1571450554",
      p: "KONG Plush Duck Dog Toy",
      price: "$3.20",
      star: starzero(),
      otzyvy: "0.0",
      countotzyvov: "(0)",
    },
    {
      id: "10",
      category: "toy",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/30857-1568391408_800x.jpg?v=1571450559",
      p: "KONG Wubba Classic Dog Toy",
      price: "$12.29",
      star: starfive(),
      otzyvy: "5.0",
      countotzyvov: "(2)",
    },
    {
      id: "11",
      category: "toy",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/31074-1_4b5f8ea1-da9c-46c9-962b-d7b5046c3a6c_800x.jpg?v=1571450532",
      p: "MultiPet Lamb Chop Dog Toy",
      price: "$5.99",
      star: starfour(),
      otzyvy: "4.0",
      countotzyvov: "(44)",
    },
    {
      id: "12",
      category: "toy",
      img: "https://cdn.shopify.com/s/files/1/0812/3573/products/33985-1450212890_ecea5283-dadb-43ac-88bc-0fb7ba48c34a_800x.jpg?v=1571450580",
      p: "JW Pet Hol-ee Roller Dog Toy",
      price: "$11.29",
      star: starthree(),
      cssimg: {padding: 30},
      otzyvy: "3.0",
      countotzyvov: "(69)",
    }
  ];
   
  export default Data;