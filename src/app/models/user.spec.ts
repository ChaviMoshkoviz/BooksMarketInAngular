import { UserDTO } from './usersDTO';

describe('User', () => {
  it('should create an instance', () => {
    const u: UserDTO = { userId: 0, fullName: '', email: '', phone: '', city: '', status: false, role: 0 };
    expect(u).toBeTruthy();
  });
});
