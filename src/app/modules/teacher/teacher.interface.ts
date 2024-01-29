export interface ITeacher {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  dateOfBirth: string;
  gender: "male" | "female";
  email: string;
  contactNo: string;
  presentAddress: string;
  permanentAddress: string;
  designation:
    | "professor"
    | "assistant professor"
    | "associate professor"
    | "senior lecturer"
    | "lecturer"
    | "adjunct faculty";
}
