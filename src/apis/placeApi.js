const savePlace = (
	mandado_inplace,
	visited_by,
	name,
	date,
	adress,
) => fetch('http://localhost:8000/api/v1/lugar/' , {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		mandado_inplace,
		visited_by,
		name,
		date,
		adress,
  }),
}).then(resultado => resultado)
	.catch((/*Error */) =>{
		//Do something
	});

export default savePlace;
