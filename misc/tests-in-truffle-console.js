var instance = EventTickets.at(EventTickets.address)
const BN = web3.utils.BN

accounts = web3.eth.getAccounts()
const firstAccount = accounts[0]
const secondAccount = accounts[1]
const thirdAccount = accounts[2]
const description = "description"
const url = "URL"
const ticketNumber = 100
const ticketPrice = 100

const owner = await instance.owner()
