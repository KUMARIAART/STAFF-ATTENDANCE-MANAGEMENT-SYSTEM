import Staff from "../Components/staff/Staff";
import { render } from "@testing-library/react";

describe('Staff Attendance System', () => {
  it("button should be disabled",()=>{
    const{getByTestId}=render(<Staff />)
    expect (getByTestId('button')).toBeDisabled()
  })
})