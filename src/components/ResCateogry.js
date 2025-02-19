
import ItemList from "./ItemList";

const ResCategory = ({data, showItems, setShowIndex}) => {

    
    //handleClick fn//
    const handleClick = () =>{
        setShowIndex();
    }
    
    return (
    
    <div>
        {/* header */}
        <div className="w-6/12 bg-gray-100 shadow-lg m-auto  my-4 p-2 ">
        <div className="flex justify-between text-xl cursor-pointer" onClick={handleClick}>
            <span className="font-bold"> {data.title} ({data?.categories?.length} {data?.itemCards?.length} ) </span>
            <span>🔽</span>
        </div>
        
            {/* Category Body */}
        {showItems && <ItemList items = {data.itemCards}/>}
        </div>
        {/* Accordion */}
    </div>
)};
export default ResCategory;