// interface
// optional properties
interface IContact {
  name: string;
  phone: string;
  email?: string;
}

const contacts: IContact[] = [];

const newContact: IContact = {
  name: 'Nguyen Van A',
  phone: '0123456',
  email: 'nguyenvana@gmail.com',
};

const someContact: IContact = {
  name: 'Nguyen Van B',
  phone: '0123456',
};

contacts.push(newContact);
