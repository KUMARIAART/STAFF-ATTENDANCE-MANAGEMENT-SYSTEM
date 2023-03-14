import { cleanup, render } from "@testing-library/react";
import AttendanceByDate from "../Components/supervisor/AttendanceByDate";
import AttendanceByName from "../Components/supervisor/AttendanceByName";


afterEach(cleanup)

describe('Staff Attendance System', () => {
    it("button should be disabled", () => {
        const { getByTestId } = render(<AttendanceByDate/>)
        expect(getByTestId('button')).toBeDisabled()
    })
    it("button should be disabled", () => {
        const { getByTestId } = render(<AttendanceByName />)
        expect(getByTestId('button')).toBeDisabled()
    })
})