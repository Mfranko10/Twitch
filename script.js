{
	const frases = [
    "La vida es un 10% lo que nos ocurre y un 90% cómo reaccionamos.",
    "No cuentes los días, haz que los días cuenten.",
    "No te rindas, el principio siempre es lo más difícil.",
    "El éxito no es la clave de la felicidad; la felicidad es la clave del éxito.",
    "No puedes cambiar lo que está fuera de ti, pero puedes cambiar lo que está dentro.",
    // Agrega aquí más frases hasta completar las 1000
];
	function obtenerFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
}

// Llamada a la función para mostrar una frase aleatoria
obtenerFraseAleatoria()
}
