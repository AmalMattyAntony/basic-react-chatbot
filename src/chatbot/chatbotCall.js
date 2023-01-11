// read the api token from environment variable
const API_TOKEN = process.env.REACT_APP_HUGGINGFACE_API_TOKEN;
async function query_api(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/facebook/blenderbot_small-90M",
		{
			headers: { Authorization: `Bearer ${API_TOKEN}` },
			method: "POST",
			body: JSON.stringify(data),
		}
	).catch((error) => {
		console.log(error);
		return "Error: " + error;
	});
	const result = await response.json();
	return result;
}


export {query_api};