import Login from "../Components/login/Login";
import { render } from "@testing-library/react";
it('Button should be disabled',()=>{
    const{getByTestId}=render(<Login />)
    expect (getByTestId('button')).toBeDisabled()
})