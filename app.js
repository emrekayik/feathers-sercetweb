const feathers = require('@feathersjs/feathers');
const app = feathers();


class MessageService{
	constructor(){
		this.messages = [];
	}

	async find(){
		return this.messages;
	}

	async create(data){

		const message = {
			id: this.message.length,
			text: data.text
		}


		this.messages.push(message);

		return message;
	}
}


app.use('messages', new MessagesService());

app.service('messages').on('created', message => {
	console.log('A new message has been created', message);
});


const main = async ()=>{

}
