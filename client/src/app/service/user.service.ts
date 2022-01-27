export class UserService {
  private isAdmin = false;

  constructor() {
    // check if the curretuser is admin
    const currentUser = localStorage.getItem('current-food-shop-user');
    if (currentUser) {
      const parsedUser = JSON.parse(currentUser);
      if (parsedUser.username === 'admin' && parsedUser.password === 'admin') {
        this.isAdmin = true;
      }
    }
  }

  setIsAdmin(val: boolean) {
    this.isAdmin = val;
  }

  getIsAdmin() {
    return this.isAdmin;
  }
}
