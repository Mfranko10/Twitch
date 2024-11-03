{
  const url = 'https://palavras-aleatorias.p.rapidapi.com/words/5/2';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '71ad27b963mshe2e5032b7150432p188038jsnbf44aff87d28',
		'x-rapidapi-host': 'palavras-aleatorias.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
