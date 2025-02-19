import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"
import Header from "../Header"
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";


it("should render header component", ()=>{
    render(
        <BrowserRouter>
         <Provider store={appStore}>
          <Header/>
         </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
    

})

it("should render header cart component", ()=>{
    render(
        <BrowserRouter>
         <Provider store={appStore}>
          <Header/>
         </Provider>
        </BrowserRouter>
    )

    // const cartItems = screen.getByLabelText("cart");
    const cartItems = screen.getByLabelText(/cart/);

    expect(cartItems).toBeInTheDocument();
    

})

it("should change login button to logout onClick", ()=>{
    render(
        <BrowserRouter>
         <Provider store={appStore}>
          <Header/>
         </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});



    expect(logoutButton).toBeInTheDocument();
    

})
