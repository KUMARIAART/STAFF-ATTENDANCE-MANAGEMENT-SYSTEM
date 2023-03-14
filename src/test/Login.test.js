import Login from "../Components/login/Login";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup)

it('Button should be disabled',()=>{
    const{getByTestId}=render(<Login />)
    expect (getByTestId('button')).toBeDisabled()
})