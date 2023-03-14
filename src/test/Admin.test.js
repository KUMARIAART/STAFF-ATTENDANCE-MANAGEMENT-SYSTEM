import Register from "../Components/admin/Register";
import { cleanup, render } from "@testing-library/react";
import DleleteEmploye from "../Components/admin/Delete";

afterEach(cleanup)

describe('Staff Attendance System', () => {
    it("button should be disabled", () => {
        const { getByTestId } = render(<Register />)
        expect(getByTestId('button')).toBeDisabled()
    })
    it("Heading should be Registration Form", () => {
        const { getByTestId } = render(<Register />)
        expect(getByTestId('heading')).toHaveTextContent('Registration Form')
    })
    it("button should be disabled", () => {
        const { getByTestId } = render(<DleleteEmploye />)
        expect(getByTestId('button')).toBeDisabled()
    })
    it("Heading should be Delete Member", () => {
        const { getByTestId } = render(<DleleteEmploye />)
        expect(getByTestId('heading')).toHaveTextContent('Delete Member')
    })
})