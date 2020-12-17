const Account = function (signIn) {
  this.signIn = signIn;
};
Account.prototype.getInfo = function () {
  console.log(`Login: ${this.signIn.login}, Email: ${this.signIn.email}`);
};

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
mango.getInfo();

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
poly.getInfo();
