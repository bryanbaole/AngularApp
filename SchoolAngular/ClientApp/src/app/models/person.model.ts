export class Person {

    contructor(personId: number, firstName: string, lastName: string) {
        this.PersonId = personId;
        this.FirstName = firstName;
        this.LastName = lastName;
    }

    public PersonId: number;
    public FirstName: string;
    public LastName: string;
}
