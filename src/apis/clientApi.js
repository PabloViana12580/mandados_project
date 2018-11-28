const saveClient = (
	username,
	password,
	genre,
	name,
	email,
	last_name,
	id_document,
	telephone,
	age,
) => fetch('http://localhost:8000/api/v1/cliente/', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		username,
		password,
		genre,
		name,
		email,
		last_name,
		id_document,
		telephone,
		age,
  }),
}).then(resultado => resultado)
	.catch((/*Error */) =>{
		//Do something
	});

export default saveClient;