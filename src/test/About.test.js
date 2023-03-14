import { cleanup, render, screen } from "@testing-library/react";
import About from "../dashboard/About";

afterEach(cleanup)

describe("Image",()=>{
    test("Image must have src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lkhvMOYvp02TXD6D6nEGxUJESv4Hfn_FKw&usqp=CAU' and alt='Image'",()=>{
        render(<About/>)
        const image=screen.getByRole('img');
        expect(image).toHaveAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lkhvMOYvp02TXD6D6nEGxUJESv4Hfn_FKw&usqp=CAU')
        expect(image).toHaveAttribute('alt','Image')
    })
})