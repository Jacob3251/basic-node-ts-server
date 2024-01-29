export interface IStudent {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  dateOfBirth: string;
  gender: "male" | "female";
  email: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}
