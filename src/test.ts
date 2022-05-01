import * as Mailer from './mailer';
const age = 1;

let newLet: string;

function sum(a: number, b: number) {
  return a + b;
}

const sendMail = async ({
  email,
  subject,
  content,
}: {
  email: string;
  subject: string;
  content: string;
}) => {
  const res = await Mailer.send(email, subject, content);
  return res;
};

const waitAndDo = (callback: (params: string) => void) => {
  setTimeout(() => {
    callback(`Hello`);
  }, 1000);
};

const cb = (params: string) => {
  console.log(params);
};

waitAndDo((params: string) => {
  console.log(params);
});

class Dog {
  say(params: string) {
    console.log('Gau gau ' + params);
  }
}

const hulk = new Dog();
hulk.say('1');
