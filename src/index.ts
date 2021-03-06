interface IContact {
  name: string;
  phone: string;
  email?: string;
}

// interface declaration merging
interface IContact {
  isDeleted: boolean;
}

class MyContact implements IContact {
  name: string;
  phone: string;
  isDeleted: boolean;

  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

const a = new MyContact('A', '123');
console.log(a.name);

// =====================
interface IContactAdapter {
  getData: () => Promise<IContact[]>;
}

class MyContactAdapter implements IContactAdapter {
  async getData() {
    // TODO: get data from API
    const contacts: IContact[] = await [
      { name: 'A', phone: '123', isDeleted: true },
      { name: 'B', phone: '456', isDeleted: true },
    ];
    return contacts;
  }
}

class ContactApp {
  adapter: IContactAdapter;
  constructor(adapter: IContactAdapter) {
    this.adapter = adapter;
  }

  async render() {
    const contacts: IContact[] =
      await this.adapter.getData();

    console.table(contacts);
  }
}

const adapter = new MyContactAdapter();
const b = new ContactApp(adapter);
b.render();
