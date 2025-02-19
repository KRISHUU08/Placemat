import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("wrap all contactUs components",()=> {

    // beforeAll(()=>{
    //     console.log("before all");
    // });

    // beforeEach(()=>{
    //     console.log("before each");
    // })

    // afterAll(()=>{
    //     console.log("after all");
    // });

    // afterEach(()=>{
    //     console.log("after each");
    // })

    it("should load contact component", () => {
        render(<Contact />)
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
        
    
    })
    
    it("should load placeholdername", ()=> {
        //render
        render(<Contact/>);
    
        //Querying
        const inputValue = screen.getAllByPlaceholderText(/(name|message)/);
        console.log(inputValue);
    
        //Assertion
        expect(inputValue.length[0]).toBe();
    
    })
    
    it("all inputBoxes should component", () => {
        render (<Contact />);
    
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
        
    
    })
    
} )
