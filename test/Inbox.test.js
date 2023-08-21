const ganache = require('ganache');
const { Web3 } = require('web3');

const assert = require('assert');
// updated ganache and web3 imports added for convenience

// contract test code will go here
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async() =>{
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts()
    // .then(fetchedAccounts => {
    //   console.log(fetchedAccounts);
    // });

  // Use one of those accounts to deploy
  // the contracts
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', ()=>{
  it('deploys a contract', () =>{
    console.log(inbox);
  });
});