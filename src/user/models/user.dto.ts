
export interface IUser {
    _id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    mobileNo: string;
    employeeId: string;
    password: string;
    loginAccess: boolean;
    roleMap: any[];
}

export class UserDto implements IUser {
    _id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    mobileNo: string;
    employeeId: string;
    password: string;
    loginAccess: boolean;
    roleMap: any[];

}