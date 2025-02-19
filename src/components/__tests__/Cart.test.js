import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react";
import ResMenu from "../ResMenu";
import MOCK_DATA_Name from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA_Name)
        }
    })
})
it("should load resMenu components", async()=>{
    await act(async()=>
    render(
        <Provider store={appStore}>

        <ResMenu />
        </Provider>
    ));

    const accordionHeader = screen.getByTitle("Sides (14)");
    fireEvent.click(accordionHeader);

    const fooditem = screen.getAllByTestId("foodItems");
    expect(fooditem.length).toBe(14);
})
