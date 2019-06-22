import { Department } from './department.model';

export interface Product {
    name: string;
    id: number;
    price: number;
    description: string;
    department: Department
}