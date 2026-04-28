import { UserRole } from './user-role.enum';

export class User {
  userId: number;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  status: boolean;
  role: UserRole;

  constructor(init?: Partial<User>) {
    this.userId = init?.userId ?? 0;
    this.fullName = init?.fullName ?? '';
    this.email = init?.email ?? '';
    this.phone = init?.phone ?? '';
    this.city = init?.city ?? '';
    this.status = init?.status ?? false;
    this.role = init?.role ?? UserRole.Registered;
  }
}
