
export class Client {
    public general: General;
    public job: Job;
    public contact: Contact;
    public address: Address;

    constructor(general, job, contact, address) {
        this.general = general;
        this.job = job;
        this.contact = contact;
        this.address = address;
    }
}

class General {
    firstName: string;
    lastName: string;
    avatar: string;

    constructor (firstName, lastName, avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
    }
}

class Job {
    title: string;
    company: string;

    constructor (title, company) {
        this.title = title;
        this.company = company;
    }
}

class Contact {
    phone: string;
    email: string;

    constructor (phone, email) {
        this.phone = phone;
        this.email = email;
    }
}

class Address {
    street: string;
    city: string;
    zipCode: string;
    country: string;

    constructor (street, city, zipCode, country) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
        this.country = country;
    }
}

