/* <script>
      const heading = document.createElement("h1")
      heading.innerHTML = "hello ji !";
      root.appendChild(heading);
    </script> */

// const heading = React.createElement("h1", {}, "hello ji");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import { Shimmer } from "./components/shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";



           //use {} this//
/*const parent = React.createElement("div", {id : "parent"},
React.createElement("div", {id : "child"}, 
React.createElement("h1", {}, "hey krish" )));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); */

          //JSX// OR reactElement
// const jsxHeading = <h1 id="heading">This is JSX method</h1>;


//          //Function Component
// const HeadingComponent = () =>(
// <div id="container">
//   {jsxHeading}                     
//    <h1>this is Component</h1>
//    </div>
// )



//food app//
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
const [userName, setUserName] = useState();

useEffect(() => {
     //Make an API call and send username and passsword//
     const data = {
       name: "Krishuu",
     };
     setUserName(data.name);
},[])


  
  return (
    <Provider store = {appStore}>
    <userContext.Provider value={{ loggedInUser:userName, setUserName }}>
      <div className="app">
      <Header/>
      <Outlet />
    </div>
    </userContext.Provider>
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },

      
      {
        path: "/contact",
        element: <Contact/>,
      },

      {
        path: "/instamart",
        element: (
          <Suspense fallback= {<Shimmer />}>
            <Instamart/>
          </Suspense>
        ),
        

      },

      {
        path: "/cart",
        element: <Cart/>,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/restaurant/:resId",
        element: <ResMenu/>,
      },
    ],
    errorElement: <Error/> 
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



// {
//   "info": {
//     "id": "253984",
//     "name": "McDonald's",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/c78bd8b9-0872-46a4-8403-8f2b12efd3fe_253984.JPG",
//     "locality": "Himalaya Marg",
//     "areaName": "Sector 35",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//       "American"
//     ],
//     "avgRating": 4.5,
//     "parentId": "630",
//     "avgRatingString": "4.5",
//     "totalRatingsString": "20K+",
//     "sla": {
//       "deliveryTime": 19,
//       "lastMileTravel": 2.9,
//       "serviceability": "SERVICEABLE",
//       "slaString": "15-20 mins",
//       "lastMileTravelString": "2.9 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-08 03:00:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "Rxawards/_CATEGORY-Burger.png",
//           "description": "Delivery!"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Delivery!",
//                 "imageId": "Rxawards/_CATEGORY-Burger.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/mcdonalds-himalaya-marg-sector-35-rest253984",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "737858",
//     "name": "The Belgian Waffle Co.",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/7/3d49729c-bb50-4c51-9c3f-71e762dfdbc1_737858.JPG",
//     "locality": "South Chd",
//     "areaName": "Sector 46",
//     "costForTwo": "₹200 for two",
//     "cuisines": [
//       "Waffle",
//       "Desserts",
//       "Ice Cream"
//     ],
//     "avgRating": 4.6,
//     "veg": true,
//     "parentId": "2233",
//     "avgRatingString": "4.6",
//     "totalRatingsString": "418",
//     "sla": {
//       "deliveryTime": 20,
//       "lastMileTravel": 2.5,
//       "serviceability": "SERVICEABLE",
//       "slaString": "15-20 mins",
//       "lastMileTravelString": "2.5 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-07 23:30:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "v1695133679/badges/Pure_Veg111.png",
//           "description": "pureveg"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "pureveg",
//                 "imageId": "v1695133679/badges/Pure_Veg111.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/the-belgian-waffle-co-south-chd-sector-46-rest737858",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "41298",
//     "name": "KFC",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/0952e937-f7ad-4d0f-a369-168bfb3991d6_41298.JPG",
//     "locality": "Sector 34",
//     "areaName": "Sector 34",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//       "Burgers",
//       "Fast Food",
//       "Rolls & Wraps"
//     ],
//     "avgRating": 4.4,
//     "parentId": "547",
//     "avgRatingString": "4.4",
//     "totalRatingsString": "5.1K+",
//     "sla": {
//       "deliveryTime": 18,
//       "lastMileTravel": 2.6,
//       "serviceability": "SERVICEABLE",
//       "slaString": "15-20 mins",
//       "lastMileTravelString": "2.6 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-08 01:00:00",
//       "opened": true
//     },
//     "badges": {
      
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "50% OFF",
//       "subHeader": "UPTO ₹80"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "4.2",
//         "ratingCount": "1.9K+"
//       },
//       "source": "GOOGLE",
//       "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/kfc-sector-34-rest41298",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "41350",
//     "name": "Burger King",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_41350.JPG",
//     "locality": "Sector 35",
//     "areaName": "Sector 35",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//       "Burgers",
//       "American"
//     ],
//     "avgRating": 4.4,
//     "parentId": "166",
//     "avgRatingString": "4.4",
//     "totalRatingsString": "55K+",
//     "sla": {
//       "deliveryTime": 24,
//       "lastMileTravel": 3,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-25 mins",
//       "lastMileTravelString": "3.0 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-08 05:29:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "Rxawards/_CATEGORY-Burger.png",
//           "description": "Delivery!"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Delivery!",
//                 "imageId": "Rxawards/_CATEGORY-Burger.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "60% OFF",
//       "subHeader": "UPTO ₹120"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "4.3",
//         "ratingCount": "4.4K+"
//       },
//       "source": "GOOGLE",
//       "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/burger-king-sector-35-rest41350",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "49690",
//     "name": "Domino's Pizza",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/1eb23175-7489-4f65-beb0-680d9fbc86eb_49690.jpg",
//     "locality": "Sector 34",
//     "areaName": "Sector 34",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//       "Pizzas",
//       "Italian",
//       "Pastas",
//       "Desserts"
//     ],
//     "avgRating": 4.5,
//     "parentId": "2456",
//     "avgRatingString": "4.5",
//     "totalRatingsString": "5.4K+",
//     "sla": {
//       "deliveryTime": 25,
//       "lastMileTravel": 2.7,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-25 mins",
//       "lastMileTravelString": "2.7 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-08 00:55:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "Rxawards/_CATEGORY-Pizza.png",
//           "description": "Delivery!"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Delivery!",
//                 "imageId": "Rxawards/_CATEGORY-Pizza.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "₹75 OFF",
//       "subHeader": "ABOVE ₹249",
//       "discountTag": "FLAT DEAL"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "4.2",
//         "ratingCount": "2.1K+"
//       },
//       "source": "GOOGLE",
//       "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/dominos-pizza-sector-34-rest49690",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "786153",
//     "name": "Pizza Hut",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/a2d94cd9-ac91-40de-b003-0a88f76c7f00_786153.jpg",
//     "locality": "SCO459-460",
//     "areaName": "Sector 35",
//     "costForTwo": "₹350 for two",
//     "cuisines": [
//       "Pizzas"
//     ],
//     "avgRating": 4.1,
//     "parentId": "721",
//     "avgRatingString": "4.1",
//     "totalRatingsString": "477",
//     "sla": {
//       "deliveryTime": 24,
//       "lastMileTravel": 2.8,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-25 mins",
//       "lastMileTravelString": "2.8 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-08 01:00:00",
//       "opened": true
//     },
//     "badges": {
      
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "50% OFF",
//       "subHeader": "UPTO ₹100"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/pizza-hut-sco459-460-sector-35-rest786153",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "221310",
//     "name": "Sweet Truth - Cake and Desserts",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/6a26094d-3a19-4942-8728-63910c39c4e5_221310.JPG",
//     "locality": "Chandigarh Railway Station",
//     "areaName": "East Chandigarh",
//     "costForTwo": "₹450 for two",
//     "cuisines": [
//       "Bakery",
//       "Desserts"
//     ],
//     "avgRating": 4.4,
//     "parentId": "4444",
//     "avgRatingString": "4.4",
//     "totalRatingsString": "2.0K+",
//     "sla": {
//       "deliveryTime": 21,
//       "lastMileTravel": 4,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-25 mins",
//       "lastMileTravelString": "4.0 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-07 23:59:00",
//       "opened": true
//     },
//     "badges": {
      
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "60% OFF",
//       "subHeader": "UPTO ₹110"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/sweet-truth-cake-and-desserts-railway-station-east-chandigarh-rest221310",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "564030",
//     "name": "Bakingo",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/18/55039a3b-4947-46a0-9be3-5e5e986e9ba5_564030.JPG",
//     "locality": "Industrial Area 1",
//     "areaName": "Chandigarh",
//     "costForTwo": "₹299 for two",
//     "cuisines": [
//       "Bakery",
//       "Desserts",
//       "Beverages",
//       "Snacks"
//     ],
//     "avgRating": 4.7,
//     "parentId": "3818",
//     "avgRatingString": "4.7",
//     "totalRatingsString": "3.2K+",
//     "sla": {
//       "deliveryTime": 25,
//       "lastMileTravel": 5,
//       "serviceability": "SERVICEABLE",
//       "slaString": "25-30 mins",
//       "lastMileTravelString": "5.0 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-08 01:00:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "Rxawards/_CATEGORY-Desserts.png",
//           "description": "Delivery!"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Delivery!",
//                 "imageId": "Rxawards/_CATEGORY-Desserts.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "₹300 OFF",
//       "subHeader": "ABOVE ₹1399",
//       "discountTag": "FLAT DEAL"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/bakingo-industrial-area-1-chandigarh-rest564030",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "626289",
//     "name": "CakeZone Patisserie",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/29/1029309b-7906-4f14-aae5-089b59268a73_626289.jpg",
//     "locality": "SAS Nagar",
//     "areaName": "Sector 63",
//     "costForTwo": "₹200 for two",
//     "cuisines": [
//       "Bakery",
//       "Desserts",
//       "Sweets",
//       "Ice Cream"
//     ],
//     "avgRating": 4.6,
//     "parentId": "7003",
//     "avgRatingString": "4.6",
//     "totalRatingsString": "2.1K+",
//     "sla": {
//       "deliveryTime": 29,
//       "lastMileTravel": 5.5,
//       "serviceability": "SERVICEABLE",
//       "slaString": "25-30 mins",
//       "lastMileTravelString": "5.5 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-08 01:00:00",
//       "opened": true
//     },
//     "badges": {
//       "textExtendedBadges": [
//         {
//           "iconId": "guiltfree/GF_Logo_android_3x",
//           "shortDescription": "options available",
//           "fontColor": "#7E808C"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "",
//                 "fontColor": "#7E808C",
//                 "iconId": "guiltfree/GF_Logo_android_3x",
//                 "shortDescription": "options available"
//               }
//             }
//           ]
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "ITEMS",
//       "subHeader": "AT ₹69"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/cakezone-patisserie-sas-nagar-sector-63-rest626289",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "718482",
//     "name": "Chinese Wok",
//     "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//     "locality": "Phase 10",
//     "areaName": "Phase 10",
//     "costForTwo": "₹250 for two",
//     "cuisines": [
//       "Chinese",
//       "Asian",
//       "Tibetan",
//       "Desserts"
//     ],
//     "avgRating": 4.3,
//     "parentId": "61955",
//     "avgRatingString": "4.3",
//     "totalRatingsString": "1.2K+",
//     "sla": {
//       "deliveryTime": 26,
//       "lastMileTravel": 5,
//       "serviceability": "SERVICEABLE",
//       "slaString": "25-30 mins",
//       "lastMileTravelString": "5.0 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-08 00:00:00",
//       "opened": true
//     },
//     "badges": {
      
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "ITEMS",
//       "subHeader": "AT ₹149"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "3.1",
//         "ratingCount": "52"
//       },
//       "source": "GOOGLE",
//       "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/chinese-wok-phase-10-rest718482",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "41175",
//     "name": "Taco Bell",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/b7892762-3456-492b-b2bf-c77527067d49_41175.JPG",
//     "locality": "Chandigarh",
//     "areaName": "Sector 35",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//       "Mexican",
//       "Fast Food",
//       "Snacks"
//     ],
//     "avgRating": 4.3,
//     "parentId": "1557",
//     "avgRatingString": "4.3",
//     "totalRatingsString": "12K+",
//     "sla": {
//       "deliveryTime": 17,
//       "lastMileTravel": 2.8,
//       "serviceability": "SERVICEABLE",
//       "slaString": "15-20 mins",
//       "lastMileTravelString": "2.8 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-08 02:00:00",
//       "opened": true
//     },
//     "badges": {
      
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "ITEMS",
//       "subHeader": "AT ₹99"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/taco-bell-sector-35-rest41175",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "675103",
//     "name": "Theobroma",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/94d9e582-ca37-45e9-a46a-499ede641901_675103.jpg",
//     "locality": "SCO 430",
//     "areaName": "Sector 35 C",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//       "Desserts"
//     ],
//     "avgRating": 4.6,
//     "parentId": "1040",
//     "avgRatingString": "4.6",
//     "totalRatingsString": "836",
//     "sla": {
//       "deliveryTime": 15,
//       "lastMileTravel": 2.7,
//       "serviceability": "SERVICEABLE",
//       "slaString": "10-15 mins",
//       "lastMileTravelString": "2.7 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-07 23:00:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "newg.png",
//           "description": "Gourmet"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Gourmet",
//                 "imageId": "newg.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "ITEMS",
//       "subHeader": "AT ₹99"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/theobroma-sco-430-sector-35-c-rest675103",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "613368",
//     "name": "Baskin Robbins - Ice Cream Desserts",
//     "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
//     "locality": "Sukhna Path",
//     "areaName": "Sector 32",
//     "costForTwo": "₹250 for two",
//     "cuisines": [
//       "Desserts",
//       "Ice Cream"
//     ],
//     "avgRating": 4.8,
//     "veg": true,
//     "parentId": "5588",
//     "avgRatingString": "4.8",
//     "totalRatingsString": "206",
//     "sla": {
//       "deliveryTime": 15,
//       "lastMileTravel": 0.5,
//       "serviceability": "SERVICEABLE",
//       "slaString": "10-15 mins",
//       "lastMileTravelString": "0.5 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-07 23:45:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
//           "description": "bolt!"
//         },
//         {
//           "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
//           "description": "Delivery!"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "bolt!",
//                 "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
//               }
//             },
//             {
//               "attributes": {
//                 "description": "Delivery!",
//                 "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "₹125 OFF",
//       "subHeader": "ABOVE ₹199",
//       "discountTag": "FLAT DEAL"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/baskin-robbins-ice-cream-desserts-sukhna-path-sector-32-rest613368",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "444134",
//     "name": "Wendy's Burgers",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/295e8722-fdc7-42c1-af55-816bc9224db2_444134.jpg",
//     "locality": "Sahibzada Ajit Singh Nagar",
//     "areaName": "Phase 11 Mohali",
//     "costForTwo": "₹200 for two",
//     "cuisines": [
//       "Burgers",
//       "American",
//       "Fast Food",
//       "Snacks"
//     ],
//     "avgRating": 4.4,
//     "parentId": "972",
//     "avgRatingString": "4.4",
//     "totalRatingsString": "2.2K+",
//     "sla": {
//       "deliveryTime": 28,
//       "lastMileTravel": 5.8,
//       "serviceability": "SERVICEABLE",
//       "slaString": "25-30 mins",
//       "lastMileTravelString": "5.8 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-07 23:59:00",
//       "opened": true
//     },
//     "badges": {
//       "textExtendedBadges": [
//         {
//           "iconId": "guiltfree/GF_Logo_android_3x",
//           "shortDescription": "options available",
//           "fontColor": "#7E808C"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "",
//                 "fontColor": "#7E808C",
//                 "iconId": "guiltfree/GF_Logo_android_3x",
//                 "shortDescription": "options available"
//               }
//             }
//           ]
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "ITEMS",
//       "subHeader": "AT ₹59"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/wendys-burgers-sahibzada-ajit-singh-nagar-phase-11-mohali-rest444134",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "675968",
//     "name": "Natural Ice Cream",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/389fbb87-fbff-4afb-be06-19ce8b734318_675968.JPG",
//     "locality": "Madhya Marg",
//     "areaName": "Sector 7A",
//     "costForTwo": "₹150 for two",
//     "cuisines": [
//       "Ice Cream",
//       "Desserts"
//     ],
//     "avgRating": 4.7,
//     "veg": true,
//     "parentId": "2093",
//     "avgRatingString": "4.7",
//     "totalRatingsString": "766",
//     "sla": {
//       "deliveryTime": 25,
//       "lastMileTravel": 4.7,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-25 mins",
//       "lastMileTravelString": "4.7 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-08 00:30:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
//           "description": "Delivery!"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Delivery!",
//                 "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "10% OFF",
//       "subHeader": "UPTO ₹40"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/natural-ice-cream-madhya-marg-sector-7a-rest675968",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "221306",
//     "name": "Faasos - Wraps, Rolls & Shawarma",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/915d2283-44f3-49ef-8acd-7f8c87dc10b2_221306.JPG",
//     "locality": "Railway Station Chandigarh",
//     "areaName": "East Chandigarh",
//     "costForTwo": "₹200 for two",
//     "cuisines": [
//       "Kebabs",
//       "Fast Food",
//       "Snacks",
//       "American",
//       "Healthy Food",
//       "Desserts",
//       "Beverages"
//     ],
//     "avgRating": 4.5,
//     "parentId": "21809",
//     "avgRatingString": "4.5",
//     "totalRatingsString": "7.3K+",
//     "sla": {
//       "deliveryTime": 25,
//       "lastMileTravel": 4,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-25 mins",
//       "lastMileTravelString": "4.0 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-07 23:59:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "Rxawards/_CATEGORY-Rolls.png",
//           "description": "Delivery!"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Delivery!",
//                 "imageId": "Rxawards/_CATEGORY-Rolls.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "60% OFF",
//       "subHeader": "UPTO ₹110"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/faasos-wraps-rolls-and-shawarma-railway-station-east-chandigarh-rest221306",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "221308",
//     "name": "Oven Story Pizza - Standout Toppings",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/1/250675a4-bd06-4481-ac33-5ec7dbe7c542_221308.jpg",
//     "locality": "Railway Station Chandigarh",
//     "areaName": "East Chandigarh",
//     "costForTwo": "₹400 for two",
//     "cuisines": [
//       "Pizzas",
//       "Pastas",
//       "Italian",
//       "Desserts",
//       "Beverages"
//     ],
//     "avgRating": 4.4,
//     "parentId": "3534",
//     "avgRatingString": "4.4",
//     "totalRatingsString": "2.4K+",
//     "sla": {
//       "deliveryTime": 22,
//       "lastMileTravel": 4,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-25 mins",
//       "lastMileTravelString": "4.0 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-07 23:59:00",
//       "opened": true
//     },
//     "badges": {
      
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
          
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "50% OFF",
//       "subHeader": "UPTO ₹100"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/oven-story-pizza-standout-toppings-railway-station-east-chandigarh-rest221308",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "221307",
//     "name": "Behrouz Biryani",
//     "cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
//     "locality": "Near Hotel Diamond hotel",
//     "areaName": "East Chandigarh",
//     "costForTwo": "₹500 for two",
//     "cuisines": [
//       "Biryani",
//       "North Indian",
//       "Kebabs",
//       "Mughlai",
//       "Beverages",
//       "Desserts"
//     ],
//     "avgRating": 4.5,
//     "parentId": "1803",
//     "avgRatingString": "4.5",
//     "totalRatingsString": "4.1K+",
//     "sla": {
//       "deliveryTime": 22,
//       "lastMileTravel": 4,
//       "serviceability": "SERVICEABLE",
//       "slaString": "20-25 mins",
//       "lastMileTravelString": "4.0 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-01-07 23:59:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "Rxawards/_CATEGORY-Biryani.png",
//           "description": "Delivery!"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "Delivery!",
//                 "imageId": "Rxawards/_CATEGORY-Biryani.png"
//               }
//             }
//           ]
//         },
//         "textBased": {
          
//         },
//         "textExtendedBadges": {
          
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "ITEMS",
//       "subHeader": "AT ₹72"
//     },
//     "loyaltyDiscoverPresentationInfo": {
//       "logoCtx": {
//         "text": "BENEFITS",
//         "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
//       },
//       "freedelMessage": "FREE DELIVERY"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {
          
//         },
//         "video": {
          
//         }
//       }
//     },
//     "reviewsSummary": {
      
//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {
      
//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-898c33bd-5a48-45ca-9ced-80a3b4800b57"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/chandigarh/behrouz-biryani-near-hotel-diamond-hotel-east-chandigarh-rest221307",
//     "type": "WEBLINK"
//   }
// }