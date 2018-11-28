export const fetchData = async () => {
	try{
		const response = await fetch('http://127.0.0.1:8000/api/v1/mandadero/');
		const data = await response.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}