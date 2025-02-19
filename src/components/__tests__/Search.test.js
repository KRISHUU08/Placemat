import { screen, render, fireEvent } from "@testing-library/react"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";


//create dummy data for fetch//
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should search resList for burger text input", async()=>{

    await act(async()=>
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    )
    )

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name: "Search"});
    console.log(searchBtn);

    const searchInput = screen.getByTestId("searchInput");
    console.log(searchInput);

    fireEvent.change(searchInput, {target: {value: "burger"}});

    fireEvent.click(searchBtn);
    //screen should load all resCards which have burgers..

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);
    

})

//top rated res testing by self//