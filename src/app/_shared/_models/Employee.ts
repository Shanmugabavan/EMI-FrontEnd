export class Employee {
  id: string;
  name: string;
  email: string;
  isCurrentlyEmployed: boolean;

  constructor(id: string, name: string, email: string, isAvailable: boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isCurrentlyEmployed = isAvailable;
  }
}
