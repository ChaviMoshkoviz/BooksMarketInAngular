import { UserRole } from './user-role.enum';

export interface UserDTO {
    userId: number;
    fullName: string;
    email: string;
    phone: string;
    city: string;
    status: boolean;
    role: UserRole;
}
