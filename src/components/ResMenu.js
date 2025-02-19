import { Shimmer } from "./shimmer";
import { useParams } from "react-router";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCateogry";
import { useState } from "react";


const ResMenu = () => {

const {resId} = useParams(); 

const resInfo = useResMenu(resId);

const[showIndex, setShowIndex]= useState(null);

    if(resInfo===null) {
        return <Shimmer/>;
    }

    const {
        name,
        avgRatingString,
        totalRatingsString, 
        cuisines, 
        costForTwoMessage,
        locality,
        

        } = resInfo?.cards[2]?.card?.card?.info || {};
        

        const {itemCards} = (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) ?? [] ;
        console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);


        {/*  splits in cateogries */}
        const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        ) || [];
        console.log("sections",categories);

        
       

    return (
        <div className="menu-item  p-4 m-4 text-center " >
            <h1 className=" font-bold text-2xl">{name}</h1>
            <h3 className="font-bold m-4">⭐{avgRatingString}({totalRatingsString})-{costForTwoMessage}</h3>
            <p className="text-red-500 text-base font-bold underline">{cuisines.join(",")}</p>
            <p>{locality}</p>
 
            {/* Cateogries Accordion */}
           {categories.map((category,index)=>(
            //controlled component//
                < ResCategory 
                key={category?.card?.card.title}
                data = {category?.card?.card}
                showItems={index === showIndex}
                setShowIndex={() => setShowIndex(index === showIndex ? null : index)}/>
                
            ))}
             
        </div>
    );
};

export default ResMenu;

