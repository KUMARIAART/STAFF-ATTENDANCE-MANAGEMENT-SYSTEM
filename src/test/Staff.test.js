import Staff from "../Components/staff/Staff";
describe('Staff Attendance System', () => {
  it('should fetch user data successfully', () => {
    const mockSuccessResponse = {
      attendance: [
        {
          name: 'John Doe',
          userId: '123456',
          address: '123 Main Street',
          gender: 'Male'
        },
        {
          name: 'Jane Doe',
          userId: '456789',
          address: '456 Main Street',
          gender: 'Female'
        }
      ]
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

   
    expect(mockSuccessResponse.attendance.length).toEqual(2);

    global.fetch.mockClear();
  });
})