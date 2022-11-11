
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000); 
    }
    
    
    let data = [
      {
        "id": 1,
        "title": "AMI",
        "color": "Pink",
        "gender": "female",
        "category": "jwellary",
        "description": "Set Of 20 Earring",
        "price": 399,
        "rating": 4.3,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14799210/2021/9/25/7c28cf48-6d23-455b-9d07-c5be26d994051632536691110AMISetOf20Gold-PlatedWhiteContemporaryStudsDropEarrings1.jpg"
      },
      {
        "id": 2,
        "title": "Zaveri Pearls",
        "color": "golden",
        "gender": "female",
        "category": "jwellary",
        "description": "Studed Choker Jewellery Set",
        "price": 412,
        "rating": 412,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12883616/2021/10/27/bae9798d-7980-4b30-8512-6977173e38bc1635332259431ZaveriPearlsGold-PlatedWhiteKundanPearlsStudedMultistrandCho1.jpg"
      },
      {
        "id": 3,
        "title": "Carlton London",
        "color": "Pink",
        "gender": "female",
        "category": "jwellary",
        "description": "CZ Studded Geometric Studs",
        "price": 279,
        "rating": 4.6,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9436935/2020/11/4/a73f0e91-28b8-4622-8743-f0d3cc26b2c91604496287743CarltonLondonSilver-TonedRhodium-PlatedCZStuddedGeometricStu1.jpg"
      },
      {
        "id": 4,
        "title": "DressBerry",
        "color": "Golden",
        "gender": "female",
        "category": "jwellary",
        "description": "Geometri Drop Earringd",
        "price": 499,
        "rating": 4.3,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10117791/2019/8/26/bf212852-7c38-4fb9-9e64-d82441ba472a1566816946418-DressBerry-Gold-Toned-Textured-Geometric-Drop-Earrings-53515-1.jpg"
      },
      {
        "id": 5,
        "title": "Saraf RS Jewellery",
        "color": "Black",
        "gender": "female",
        "category": "jwellary",
        "description": "Set Of 20 Earring",
        "price": 1199,
        "rating": 4.7,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14924460/2021/7/24/0ed8032d-3434-4fb2-97df-1395e33bb3601627102684650RoseGoldPlatedUniqueDesignADstuddedDesignerChokerNecklacewit1.jpg"
      },
      {
        "id": 6,
        "title": "AMI",
        "color": "Pink",
        "gender": "female",
        "category": "jwellary",
        "description": "Gold Plated Jewellery Set",
        "price": 799,
        "rating": 4.5,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16254576/2022/1/13/4ad37156-996a-464e-89bb-0c1926230dcb1642012835937AMIRoseGold-TonedWhiteRoseGoldPlatedStuddedJewellerySet1.jpg"
      },
      {
        "id": 7,
        "title": "Rubans",
        "color": "Pink",
        "gender": "female",
        "category": "jwellary",
        "description": "Floral Drop Earring",
        "price": 1359,
        "rating": 4.65,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10481692/2019/8/27/9950b38b-12a4-4609-87b7-aa9c9e5f692f1566893312072-Rubans-Gold-Toned--White-Floral-Drop-Earrings-22715668933113-4.jpg"
      },
      {
        "id": 8,
        "title": "Saraf RS Jewellery",
        "color": "Black",
        "gender": "female",
        "category": "jwellary",
        "description": "Rose Gold-Plated & AD Studded",
        "price": 1199,
        "rating": 4.3,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15838782/2021/10/18/faeca855-e9fe-408b-8d8d-ca048c194a2e1634561175171SarafRSJewelleryRoseGold-PlatedPinkADStuddedHandcraftedJewel1.jpg"
      },
      {
        "id": 9,
        "title": "Zaveri Pearls",
        "color": "Golden",
        "gender": "female",
        "category": "jwellary",
        "description": "Jewellery Set",
        "price": 379,
        "rating": 4.1,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9013413/2021/11/22/5d3728d2-e51e-40f6-bef4-530cdf320c851637560700784-Zaveri-Pearls-Traditional-Stone-Studded--Pearls-Jewellery-Se-1.jpg"
      },
      {
        "id": 10,
        "title": "Rubans",
        "color": "Golden",
        "gender": "female",
        "category": "jwellary",
        "description": "Gold-Plated Jewellery Set",
        "price": 910,
        "rating": 4.2,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10662148/2021/10/1/f3b2fcd1-db8b-42c2-9675-7fab6ac89f521633079886585-Rubans-Women-Gold-Plated--White-Pearl-Embellished-Jewellery--1.jpg"
      },
      {
        "id": 11,
        "title": "Zaveri Pearls",
        "color": "Blue",
        "gender": "female",
        "category": "jwellary",
        "description": "Gold-Plated Jewellery Set",
        "price": 599,
        "rating": 4.1,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15550098/2021/9/30/87e41755-7ddd-459a-84e1-77692924cb171632982091250ZaveriPearlsGold-TonedGreenAlloyGold-PlatedKundan-StuddedJew11.jpg"
      },
      {
        "id": 12,
        "title": "Carlton London",
        "color": "Black",
        "gender": "female",
        "category": "jwellary",
        "description": "CZ Studded Floral Studs",
        "price": 799,
        "rating": 4.7,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9437077/2019/6/20/99ab6dd9-2747-4fc5-9b5f-bd8b1a6677bc1561026582709-Carlton-London-Silver-Toned-Rhodium-Plated-CZ-Studded-Floral-1.jpg"
      },
      {
        "id": 13,
        "title": "Arrabi",
        "color": "Silver",
        "gender": "female",
        "category": "jwellary",
        "description": "Oxidised Ghungaroo Jewellery",
        "price": 698,
        "rating": 3.9,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16492034/2021/12/13/d66eba4d-78ec-48f9-8fcd-15c503e6eed31639375401805ArrabiOxidisedMetallic-TonedGhungarooJewellerySet1.jpg"
      },
      {
        "id": 14,
        "title": "Zaveri Pearls",
        "color": "Golden",
        "gender": "female",
        "category": "jwellary",
        "description": "Crescent Shaped Chandbalis",
        "price": 899,
        "rating": 4,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9013423/2021/11/22/4de3f6ac-c212-416c-8f57-0ab03d6c7a521637573705422ZaveriPearlsGold-TonedPearlKundanStuddedCrescentShapedChandb1.jpg"
      },
      {
        "id": 15,
        "title": "YouBella",
        "color": "Black",
        "gender": "female",
        "category": "jwellary",
        "description": "Set Of 2 Gold-Plated Chain",
        "price": 389,
        "rating": 4.2,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/5/15/74ef45d3-2acd-4a8b-a3a2-dc099955d0551621056130389-1.jpg"
      },
      {
        "id": 16,
        "title": "PANASH",
        "color": "Silver",
        "gender": "female",
        "category": "jwellary",
        "description": "Silver-Plated Oxidised Jhumkas",
        "price": 349,
        "rating": 4.4,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/1/18/a562d5c6-be6c-4871-a064-a4c0c05aa8df1547817077168-1.jpg"
      },
      {
        "id": 17,
        "title": "Saraf RS Jewellery",
        "color": "Black",
        "gender": "female",
        "category": "jwellary",
        "description": "Rose Gold-Plated Jewellery Set",
        "price": 1499,
        "rating": 4.1,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15477924/2021/9/16/e359eada-a4ff-4aa8-afcc-113c7f9a10b11631785651730SarafRSJewelleryRoseGold-PlatedWhiteAD-StuddedHandcraftedJew1.jpg"
      },
      {
        "id": 18,
        "title": "Priyaasi",
        "color": "Silver",
        "gender": "female",
        "category": "jwellary",
        "description": "Set Of 20 Earring",
        "price": 1249,
        "rating": 4,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10590658/2019/12/6/608a2d2d-b074-437a-883a-0a7bd087802a1575637859763-Priyaasi-Rose-Gold-Plated-CZ--American-Diamond-Studded-Handc-1.jpg"
      },
      {
        "id": 19,
        "title": "Priyaasi",
        "color": "Black",
        "gender": "female",
        "category": "jwellary",
        "description": "Set Of 20 Earring",
        "price": 689,
        "rating": 4.4,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12361312/2020/12/2/112a2f53-f140-418e-aca8-ae14591449501606897356910-Priyaasi-Oxidised-Silver-Plated-German-Silver-Jewellery-Set--1.jpg"
      },
      {
        "id": 20,
        "title": "Zaveri Pearls",
        "color": "Golden",
        "gender": "female",
        "category": "jwellary",
        "description": "Set Of 20 Earring",
        "price": 659,
        "rating": 4.2,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/9/782c271a-e74f-4214-9d02-a98f9663a3a01612855837792-1.jpg"
      },
      {
        "id": 21,
        "title": "U.S Polo Assn",
        "color": "White",
        "gender": "Men",
        "category": "Shoes",
        "description": "Men Sneakers",
        "price": 1799,
        "rating": 4.3,
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10339033/2019/8/6/df9a712b-a5fc-4a65-870a-0854fb50ea221565093150139-US-Polo-Assn-Men-Casual-Shoes-7391565093148433-1.jpg"
      },
      {
        "id": 22,
        "title": "HIGHLANDER",
        "color": "White",
        "gender": "Men",
        "category": "Shoes",
        "description": "Men Solid Sneakers",
        "price": "895",
        "rating": "4.2",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11986108/2021/8/5/68605977-c696-4351-b21c-f19ed8ba46951628146095530HIGHLANDERMenWhiteSolidSneakers1.jpg"
      },
      {
        "id": 23,
        "title": "Mactree",
        "color": "Grey",
        "gender": "Men",
        "category": "Shoes",
        "description": "Men Suede Loafers",
        "price": "898",
        "rating": "4.3",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13925944/2021/12/7/6194cd94-9147-48fb-91a8-a9b9417a7bd61638861738807MactreeMenGreenPerforationsSuedeLoafers1.jpg"
      },
      {
        "id": 24,
        "title": "Woodland",
        "color": "Grey",
        "gender": "Men",
        "category": "Shoes",
        "description": "Men Flat Boots",
        "price": "3036",
        "rating": "4.3",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1859121/2017/8/11/11502433053458-Woodland-Men-Casual-Shoes-6441502433053260-1.jpg"
      },
      {
        "id": 25,
        "title": "U.S Polo Assn",
        "color": "White",
        "gender": "Men",
        "category": "Shoes",
        "description": "Men Colourblocked",
        "price": "1799",
        "rating": "4.4",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11391306/2020/2/12/10b9eea6-35be-4b7d-8c39-826d4d3500c11581485549564-US-Polo-Assn-Men-Casual-Shoes-4671581485548936-1.jpg"
      },
      {
        "id": 26,
        "title": "One8 x PUMA",
        "color": "Black",
        "gender": "Men",
        "category": "Shoes",
        "description": "Men Focus One8 IDP Run Shoes",
        "price": "2149",
        "rating": "3.7",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15244560/2021/11/9/f5fd4b1c-011f-485c-a3ad-64589626b7801636460824112-one8-x-PUMA-Men-Black-Focus-One8-IDP-Slip-on-Running-Shoes-1-1.jpg"
      },
      {
        "id": 27,
        "title": "HRX by Hrithik Roshan",
        "color": "Black",
        "gender": "Men",
        "category": "Shoes",
        "description": "Men Urban Street Shoes",
        "price": "1719",
        "rating": "4.4",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12543522/2021/3/26/c370dbf2-b3b2-44ab-b401-51f0a7ddf94e1616744272165-HRX-by-Hrithik-Roshan-Men-Black-Urban-Street-Athleisure-Shoe-1.jpg"
      },
      {
        "id": 28,
        "title": "Fentacia",
        "color": "Black",
        "gender": "Men",
        "category": "Shoes",
        "description": "Men Woven Flat Boots",
        "price": "809",
        "rating": "3.8",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15583000/2021/9/24/df2911f9-c809-4bc2-8bd5-17eafda8eec11632467705466FentaciaMenBlackPrintedFlatBoots1.jpg"
      },
      {
        "id": 29,
        "title": "Sir Corbett",
        "color": "Grey",
        "gender": "Men",
        "category": "Shoes",
        "description": "Men Oxford Format Shoes",
        "price": "974",
        "rating": "3.9",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1221307/2021/10/26/768c670e-d414-47c5-8638-a6725b9fadc31635236637362-Sir-Corbett-Men-Tan-Brown-Formal-Shoes-3261635236637289-7.jpg"
      },
      {
        "id": 30,
        "title": "Fentacia",
        "color": "Black",
        "gender": "Men",
        "category": "Shoes",
        "description": "Men Lightweight flat Boots",
        "price": "1199",
        "rating": "3.9",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/11/0383593d-4304-4115-9d5d-8d18884f2c0e1599774130983-1.jpg"
      },
      {
        "id": 31,
        "title": "Nike",
        "color": "Black",
        "gender": "female",
        "category": "Shoes",
        "description": "Unisex PRECISION V FLYEASE",
        "price": "3239",
        "rating": "4.5",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15384918/2022/1/10/08f62dbd-7a07-47d6-9a64-d08b36d75bd21641811907824-Nike-Precision-5-FlyEase-Basketball-Shoes-7371641811907459-1.jpg"
      },
      {
        "id": 32,
        "title": "ZAPATOZ",
        "color": "Black",
        "gender": "female",
        "category": "Shoes",
        "description": "Women Heeled Boots",
        "price": "669",
        "rating": "4.4",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/5/18/3d06e768-8b68-4c26-a2c0-a3228ec69f6d1621329092444-1.jpg"
      },
      {
        "id": 33,
        "title": "EI Paso",
        "color": "Black",
        "gender": "female",
        "category": "Shoes",
        "description": "Women Solid Heeled Boots",
        "price": "1082",
        "rating": "4.1",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/8/21/877b9154-5a71-4919-9559-30c1cc5aa8781597959110028-1.jpg"
      },
      {
        "id": 34,
        "title": "HRX by Hrithik Roshan",
        "color": "White",
        "gender": "female",
        "category": "Shoes",
        "description": "Women Athleisure Shoe",
        "price": "2049",
        "rating": "4.5",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11261242/2020/8/31/79f056eb-2a86-45ee-a4a1-5d4c596cdd281598862706621-HRX-by-Hrithik-Roshan-Women-White-Front-Runner-Shoes-9521598-1.jpg"
      },
      {
        "id": 35,
        "title": "TWIN TOES",
        "color": "White",
        "gender": "female",
        "category": "Shoes",
        "description": "Women Colourblocked Sneakers",
        "price": "799",
        "rating": "4.1",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15354232/2021/9/3/fce872e8-919d-4a60-8cf7-5214a1ca6c601630678088413TWINTOESWomenWhiteColourblockedSneakers1.jpg"
      },
      {
        "id": 36,
        "title": "Roadster",
        "color": "White",
        "gender": "female",
        "category": "Shoes",
        "description": "Women Colourblocked Sneakers",
        "price": "1399",
        "rating": "4.4",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14033258/2021/9/3/b0551c8d-904a-4765-951d-311b0f8009d91630668239976-Roadster-Women-Casual-Shoes-5501630668239579-1.jpg"
      },
      {
        "id": 37,
        "title": "Timber Wood",
        "color": "Grey",
        "gender": "female",
        "category": "Shoes",
        "description": "Women Walking Shoes",
        "price": "639",
        "rating": "4.0",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/20/35bd3c97-2dc4-4d15-b944-b132fe8928491616251873012-1.jpg"
      },
      {
        "id": 38,
        "title": "Crew STREET",
        "color": "Grey",
        "gender": "female",
        "category": "Shoes",
        "description": "Women Running Shoes",
        "price": "1049",
        "rating": "4.3",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9283423/2019/11/4/3860f6fb-9fe5-4fc8-8477-f6ea8a22b9371572856780748-Crew-STREET-Women-Grey-Woven-Design-Running-Shoes-4921572856-1.jpg"
      },
      {
        "id": 39,
        "title": "ZAPATOZ",
        "color": "Grey",
        "gender": "female",
        "category": "Shoes",
        "description": "Wedge Mules",
        "price": "679",
        "rating": "4",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14595530/2021/6/28/5f00f95e-dae5-4ab8-8d92-9724027536131624866754169-ZAPATOZ-Grey-Wedge-Mules-3401624866753971-6.jpg"
      },
      {
        "id": 40,
        "title": "Timber Wood",
        "color": "Grey",
        "gender": "female",
        "category": "Shoes",
        "description": "Women Walking Shoes",
        "price": "639",
        "rating": "4.2",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/5/11/a609b7d2-84fb-4f90-a26a-d696d4b532891620741203342-1.jpg"
      },
      {
        "id": 41,
        "title": "Campus Sutra",
        "color": "Black",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Bomber Jacket",
        "price": "1249",
        "rating": "3.9",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/10/23/81b33604-9e09-40c7-bcca-2e48e0dfa7aa1571822670368-1.jpg"
      },
      {
        "id": 42,
        "title": "HIGHLANDER",
        "color": "Black",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Padded Jacket",
        "price": "1199",
        "rating": "4",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15835932/2021/10/22/76522080-743c-48b3-8dc5-3b4a6b15d1cf1634909782241HIGHLANDERMenBlackColourblockedPufferJacket1.jpg"
      },
      {
        "id": 43,
        "title": "Domyos By Decathlon",
        "color": "Black",
        "gender": "Male",
        "category": "Jacket",
        "description": "Lightweight Training",
        "price": "956",
        "rating": "4.1",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/9/35c16521-1708-4c8d-9ea3-c67a1cea93a91623212921914-1.jpg"
      },
      {
        "id": 44,
        "title": "Campus Sutra",
        "color": "Blue",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Varsity Jacket",
        "price": "599",
        "rating": "3.9",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6996811/2018/7/23/2058ea63-57d1-461e-8f82-ab16617b39da1532339067981-Campus-Sutra-Full-Sleeve-Solid-Men-Jacket-6361532339067785-1.jpg"
      },
      {
        "id": 45,
        "title": "HIGHLANDER",
        "color": "Blue",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Denim Jacket",
        "price": "1159",
        "rating": "4.6",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/10/26/e327db60-12a2-4d81-a404-a81ac8c1ed291572062812112-1.jpg"
      },
      {
        "id": 46,
        "title": "WRONG",
        "color": "Blue",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Slim Fit Bomber Jacket",
        "price": "1999",
        "rating": "4.8",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10187067/2019/10/22/34b7f065-33f9-4665-9015-1329eb1762ab1571725612018-WROGN-Men-Navy-Blue-Solid-Slim-Fit-Bomber-Jacket-15515717256-6.jpg"
      },
      {
        "id": 47,
        "title": "Yuuki",
        "color": "Blue",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Lightweight Sporty Jacket",
        "price": "1299",
        "rating": "3.9",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16599628/2021/12/23/48241942-218b-4be6-a0ba-4da5fb9fbe461640258132026Jackets1.jpg"
      },
      {
        "id": 48,
        "title": "WRONG",
        "color": "Brown",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Tailores Jacket",
        "price": "2159",
        "rating": "4.2",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/h_280,q_90,w_210/v1/assets/images/1845112/2020/1/29/36abaaf7-4ba3-4714-8e0d-84034313fe291580299535086-RDSTR-Men-Brown-Solid-Biker-Jacket-1791580299532304-1.jpg"
      },
      {
        "id": 49,
        "title": "HIGHLANDER",
        "color": "Brown",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Bomber Jacket",
        "price": "1239",
        "rating": "3.8",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/h_280,q_90,w_210/v1/assets/images/productimage/2019/11/22/fa4acb33-cd26-478a-b10a-356e802ac6951574420102977-1.jpg"
      },
      {
        "id": 50,
        "title": "HIGHLANDER",
        "color": "Brown",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Biker Jacket",
        "price": "1639",
        "rating": "4.3",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10773542/2020/11/18/bf554e45-d9e9-488f-b003-1d870a2218131605695911454HIGHLANDERMenBrownSolidBikerJacket1.jpg"
      },
      {
        "id": 51,
        "title": "Leather Retail",
        "color": "Brown",
        "gender": "female",
        "category": "Jacket",
        "description": "Solid Leather Jacket",
        "price": "2699",
        "rating": "4.4",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14455420/2021/6/23/37bff78e-cce8-46de-9648-9d5be1d0eaf51624446043415-Leather-Retail-Women-Brown-Solid-Lightweight-Leather-Jacket--1.jpg"
      },
      {
        "id": 52,
        "title": "URBANIC",
        "color": "Brown",
        "gender": "female",
        "category": "Jacket",
        "description": "Longline Tailored Jacket",
        "price": "2034",
        "rating": "3.6",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15851260/2021/12/3/450816b9-e39b-4876-b77d-e16a87e8adcb1638506617149URBANICWomenBrownSolidLonglineTailoredJacket1.jpg"
      },
      {
        "id": 53,
        "title": "Woods",
        "color": "Brown",
        "gender": "female",
        "category": "Jacket",
        "description": "Women Striped Bomber Jacket",
        "price": "1989",
        "rating": "4.6",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16491532/2021/12/13/eb959844-7274-4d95-8cab-61a57f4bce961639371856698WoodsWomenBrownStripedLeatherWaterResistantBomberwithEmbroid1.jpg"
      },
      {
        "id": 54,
        "title": "Tokyo Talkies",
        "color": "Black",
        "gender": "female",
        "category": "Jacket",
        "description": "Puffer Jacket",
        "price": "1099",
        "rating": "4.1",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15927640/2021/10/26/4cd42dc9-d96a-4e2e-89eb-6df0e8b393c81635232658135TokyoTalkiesWomenBlackPufferJacket1.jpg"
      },
      {
        "id": 55,
        "title": "Leather Retail",
        "color": "Black",
        "gender": "female",
        "category": "Jacket",
        "description": "Solid Biker Jacket",
        "price": "2599",
        "rating": "4.3",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12635674/2020/10/13/2a2b4c37-f29f-448b-b03b-e23df37e1b8b1602565065693TopsakheriWomenTopsakheriWomenTrousersakheriWomenTopsakheriW1.jpg"
      },
      {
        "id": 56,
        "title": "DOOR74",
        "color": "Black",
        "gender": "female",
        "category": "Jacket",
        "description": "Checked Tailored Jacket",
        "price": "899",
        "rating": "3.6",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/6/bcf54495-5146-4327-919f-998a2456bf6d1609929038028-1.jpg"
      },
      {
        "id": 57,
        "title": "Tokyo Talkies",
        "color": "Black",
        "gender": "female",
        "category": "Jacket",
        "description": "Women Puffer Jacket",
        "price": "930",
        "rating": "4.2",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15982502/2021/11/2/a1c6206b-6bee-4659-90e4-26b3351e63dd1635838052135TokyoTalkiesWomenBlueCropPaddedJacketwithPatchwork1.jpg"
      },
      {
        "id": 58,
        "title": "Roadster",
        "color": "Blue",
        "gender": "female",
        "category": "Jacket",
        "description": "",
        "price": "919",
        "rating": "4.5",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12178110/2020/9/15/32a696c1-e454-46bd-ab81-2705423e363e1600147562895-Roadster-Women-Jackets-2251600147560316-1.jpg"
      },
      {
        "id": 59,
        "title": "Mast & Harbour",
        "color": "Blue",
        "gender": "female",
        "category": "Jacket",
        "description": "Faded Denim Jacket",
        "price": "1014",
        "rating": "4.4",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15507910/2021/12/15/abf718e5-67b3-4038-9e6f-9fba15e96d7c1639552195152-Mast--Harbour-Women-Jackets-9551639552194481-1.jpg"
      },
      {
        "id": 60,
        "title": "Honey bt Pantaloons",
        "color": "Blue",
        "gender": "female",
        "category": "Jacket",
        "description": "Parka Jacket",
        "price": "1574",
        "rating": "4.5",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16557204/2021/12/20/cef86fd8-f3de-4b67-8e71-038272b489a41639988369497HoneybyPantaloonsWomenNavyBlueColourblockedLonglineParkaJack1.jpg"
      }
    ];
     function displayCard(data){
      document.querySelector("#container").innerHTML="";
       data.forEach(elem => {
  
      let div=document.createElement("div");
  
      let imageProd = document.createElement("img");
      imageProd.setAttribute("src",elem.image)
  
      let des=document.createElement("p")
      des.innerText=elem.description;
  
      let cate = document.createElement("p")
      cate.innerText=elem.gender
  
      let title=document.createElement("p");
      title.innerText=elem.title;
  
      let cost=document.createElement("h3");
      cost.innerText=elem.price
  
      let btn=document.createElement("button");
      btn.innerText="Add to card"
  
      btn.addEventListener("click",function(){
          cartItems.push(elem);
          localStorage.setItem("cart_Products",JSON.stringify(men_item));
      })
      div.append(imageProd,des,cate,title,cost,btn);
  
      document.querySelector("#container").append(div);
        
    });
   }
   displayCard(data);
