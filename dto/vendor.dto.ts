export interface createVendorInputs{
    name: string;
    owenerName: string;
    foodType: [string];
    pincode: string;
    address: string;
    phone: string;
    password: string;
    email: string;
}

export interface createVendorLogin {
    email: string;
    password: string;
}