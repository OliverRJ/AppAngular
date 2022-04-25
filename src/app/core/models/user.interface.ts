import { RolInterface } from "./rol.interface";

export interface UserInterface{
    id:string;
    name: number;
    age: number;
    rols:RolInterface[]
}