class Teacher {
  private readonly _firstName: string;
  private readonly _lastName: string;
  private _fullTimeEmployee: boolean;
  private _yearsOfExperience?: number;
  private _location: string;
  [key: string]: any;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullTimeEmployee = fullTimeEmployee;
    this._location = location;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullTimeEmployee(): boolean {
    return this._fullTimeEmployee;
  }

  set fullTimeEmployee(value: boolean) {
    this._fullTimeEmployee = value;
  }

  get yearsOfExperience(): number | undefined {
    return this._yearsOfExperience;
  }

  set yearsOfExperience(value: number | undefined) {
    this._yearsOfExperience = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }
}

// Create a Teacher object with specific and additional attributes
const teacher3 = new Teacher('John', 'Doe', false, 'London');
teacher3.contract = false; // Adding an additional attribute

console.log(teacher3);
