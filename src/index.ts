interface IAddress {
  city: string;
}

interface IContact {
  name: string;
  phone: string;
  email?: string;
  address?: IAddress[];
}

const contacts: IContact[] = [];

const newContact: IContact = {
  name: 'Nguyen Van A',
  phone: '0123456',
  email: 'nguyenvana@gmail.com',
  address: [
    {
      city: 'Bac Giang',
    },
  ],
};

const someContact: IContact = {
  name: 'Nguyen Van B',
  phone: '0123456',
};

contacts.push(newContact);

const getFirstAddress = (contact: IContact) => {
  return contact.address?.[0];
};

console.log(getFirstAddress(newContact));
console.log(getFirstAddress(someContact));
