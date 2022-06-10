/* eslint-disable no-tabs */
import randomNumber from './math'

export const syllablesString = 'CU-CO CU-CA CU-BO CU-BA MA-MA PA-PA TI-TO TA-SA PA-TO ME-SA BE-S0 PI-NO LI-MA LA-NA NA-VO NO-TA RO-JO GO-RO ME-MA LO-VO LA-LO LU-LU LO-MO BE-BE BO-TE DE-DO DE-MO MO-MO MI-MO DO-MO DI-NO PI-PO PO-PI PU-PO PI-NO'
const prueba = syllablesString.split(' ')

export const vowels: string[] = ['A', 'E', 'I', 'O', 'U']

const consonant: string[] = ['B', 'C', 'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'P', 'R', 'S', 'T', 'V']

const syllables = ['ma', 'me', 'mi', 'mo', 'mu', 'ra', 're', 'ri', 'ro', 'ru', 'ta', 'te', 'ti', 'to', 'tu']
const words = ['aire', 'coral', 'mismo',
  'arca',	'león', '	lesa',
  'percha',	'limbo', '	carta',
  'liebre',	'río', '	llave',
  'social',	'crío', '	losa',
  'bordó',	'vara', '	loco',
  'ama',	'beca', 'llano',
  'antes',	'trío', '	grave',
  'gritar',	'primo', '	grano',
  'gorro',	'sueña', '	uno',
  'ratón',	'cama', '	foco',
  'banco',	'suelo', '	pala',
  'soñar',	'tío', '	Brasil',
  'beso',	'tía', '	pasto',
  'bañar',	'franco', '	mejor',
  'tabla',	'piso', '	manso',
  'Simón',	'eco', '	mermó',
  'rico',	'lodo', '	mujer',
  'beto',	'toro', '	campo',
  'barco',	'esta', '	potro',
  'bolos',	'esa', '	ave',
  'sentir',	'faro', '	nuez',
  'rojo',	'falsa', '	gente',
  'bola',	'dama', '	mono',
  'pide',	'humo', '	mango',
  'torcer',	'selva', '	muro',
  'cortar',	'diez', '	niño',
  'rata',	'radio', '	ciudad',
  'bacha',	'juega', '	silla',
  'cosa',	'jarra', '	mucho',
  'casa',	'once', '	mutar',
  'bebé',	'árbol', '	nata',
  'dulce',	'vuela', '	Perú',
  'corto',	'tratar', '	mesa',
  'azul',	'vaca', '	mentir',
  'atún',	'jarrón', '	marcos',
  'cana',	'jota', '	veinte',
  'cara',	'zurdo', '	noche',
  'contar',	'bosque', '	milton',
  'capot',	'tecla', '	tinta',
  'taza',	'trepa', '	nene',
  'largo',	'red', '	jorge',
  'caja',	'luces', '	andrés',
  'vasco',	'jazmín', '	pintar',
  'saco',	'lago', '	lavar',
  'suave',	'lugar', '	paula',
  'casó',	'leña', '	ojo',
  'carro',	'café', '	tomás',
  'cuatro',	'trece', '	pila',
  'cantar',	'bruja', '	rodar',
  'vaso',	'vivir', '	tarde',
  'tigre',	'lino', '	parque',
  'llora',	'cien', '	rendir',
  'sino',	'cine', '	votar',
  'sobre',	'tripa', '	errar',
  'carnear',	'loza', '	horno',
  'calza',	'lana', '	manco',
  'centro',	'lupa', '	mago',
  'cenar',	'pino', '	balón',
  'así',	'tubo', '	lentes',
  'nueve',	'aura', '	mate',
  'verde',	'quince', '	nuestro',
  'blando',	'limón', '	Cuba',
  'cebo',	'treinta', '	siete',
  'cebra',	'volver', '	hasta',
  'corre',	'ladrón', '	paja',
  'dice',	'Chile', '	bote',
  'dedos',	'llevar', '	piña',
  'día',	'fauna', '	jamón',
  'cinco',	'luna', '	otro',
  'catre',	'queso', '	ocho',
  'duro', 'caña', 'pelo'
]

const monoSyllable = [
  ['MA', 'ME', 'MI', 'MO', 'MU'],
  ['PA', 'PE', 'PI', 'PO', 'PU'],
  ['LA', 'LE', 'LI', 'LO', 'LU'],
  ['BA', 'BE', 'BI', 'BO', 'BU'],
  ['NA', 'NE', 'NI', 'NO', 'NU'],
  ['GA', 'GE', 'GI', 'GO', 'GU'],
  ['SA', 'SE', 'SI', 'SO', 'SU'],
  ['TA', 'TE', 'TI', 'TO', 'TU'],
  ['DA', 'DE', 'DI', 'DO', 'DU'],
  ['FA', 'FE', 'FI', 'FO', 'FU'],
  ['JA', 'JE', 'JI', 'JO', 'JU'],
  ['YA', 'YE', 'YI', 'YO', 'YU'],
  ['VA', 'VE', 'VI', 'VO', 'VU']
]
export const wordBySylablleWithSpacer = ['ma-ma', 'co-co', 'mo-mo', 'da-da', 'ga-ga', 'me-me', 'co-co', 'mo-mo', 'de-de', 'ga-ga', 'mi-mi', 'co-co', 'mo-mo', 'du-du', 'ga-ga', 'mu-mu', 'co-co', 'mo-mo', 'ga-ga', 'co-co', 'mo-mo', 'ga-ga', 'co-co', 'mo-mo', 'ga-ga', 'co-co', 'mo-mo', 'ga-ga', 'mo-mo', 'pa-pa', 'la-la', 'ma-ma', 'ra-ra', 'la-la', 'ma-ma', 'ra-ra', 'ta-ta', 'pi-pi', 'la-la', 'ma-ma', 'ra-ra', 'ta-ta', 'po-po', 'la-la', 'ma-ma', 'ra-ra', 'ta-ta', 'pu-pu', 'la-la', 'ma-ma', 'ra-ra', 'ma-ma', 'ma-ma', 'ma-ma', 'ca-ca', 'bo-bo', 'bo-bo', 'bo-bo', 'bo-bo', 'su-su', 'ta-ta', 'to-to', 'ti-ti', 'ta-ta', 'to-to', 'ba-ba', 'be-be', 'ca-ca', 'mi-mi', 'le-le', 'fo-fo', 'pi-pi', 'pi-pi', 'ma-ma', 'fa-fa', 'ne-ne', 'ne-ne', 'ne-ne', 'yo-yo', 'to-to', 'la-la', 'li-li', 'te-te', 'ti-ti', 'ca-ca', 'bu-bu', 'pu-pu', 'pu-pu', 'pe-pe', 'pi-pi', 'te-te', 'te-te', 'fo-fo', 'fo-fo', 'fa-fa', 'fi-fi', 'fi-fi', 'fi-fi', 'fe-fe', 'fe-fe', 'pe-pe', 'pe-pe', 'pe-pe', 'pe-pe', 'po-po', 'po-po', 'mo-mo', 'le-le', 'vu-vu']
const wordBySylablle = ['masa', 'como', 'mopa', 'dado', 'gafa', 'mesa', 'copo', 'moda', 'dedo', 'gala', 'misa', 'cono', 'mofa', 'dudo', 'gama', 'musa', 'coco', 'moña', 'gata', 'codo', 'moja', 'gasa', 'coso', 'mora', 'garra', 'coto', 'mota', 'gana', 'moza', 'paso', 'lana', 'maja', 'rana', 'lama', 'mala', 'rama', 'tapa', 'piso', 'lapa', 'maña', 'rata', 'tasa', 'poso', 'lata', 'mamá', 'raya', 'taza', 'puso', 'lava', 'mapa', 'raza', 'mata', 'maza', 'malla', 'casa', 'bola', 'bolo', 'bolsa', 'boca', 'supo', 'taco', 'tono', 'tito', 'tata', 'toto', 'baba', 'beso', 'caca', 'mito', 'lejos', 'foto', 'piza', 'pino', 'mano', 'faro', 'nene', 'nena', 'nena', 'yoro', 'toco', 'lazo', 'liso', 'tero', 'tiro', 'cata', 'buso', 'puro', 'puca', 'peso', 'pica', 'tema', 'tela', 'foca', 'foto', 'fama', 'filo', 'fico', 'fino', 'feo', 'feta', 'pelo', 'pero', 'pera', 'peca', 'popi', 'pomo', 'moco', 'leon', 'vuo']
export const newWordbySyllable = () => {
  const newWord = wordBySylablle.map((word) => {
    const subStringone = word.substring(0, 2)
    const subStringtwo = word.substring(0, 2)
    const newString = `${subStringone}'-'${subStringtwo}`
    return newString
  })
  return newWord
}

export const getWordBySyllable = () => wordBySylablle[randomNumber(wordBySylablle.length)]
export const getMonoSyllable = () => {
  const limit = monoSyllable.length
  return monoSyllable[randomNumber(limit)]
}

export const limit = consonant.length
const limitWord = words.length
const limitSyllables = syllables.length

export const syllableGenerator = (): string[] => {
  const index = randomNumber(limitWord)
  return prueba.map((vowel) => consonant[index])
}

export const factoryWords = () => {
  return words[randomNumber(limitWord)]
}

const getRandomSyllable = () => {
  return prueba[randomNumber(limitSyllables)]
}

export const factoryRandomSyllable = () => {
  return consonant[randomNumber(consonant.length)] + vowels[randomNumber(vowels.length)]
}

export const bySyllableGenerator = (): string[] => {
  const syllablesArray = syllables.map((syllable) => `${syllable}-${getRandomSyllable()}`)
  return syllablesArray.sort(function () { return Math.random() - 0.5 })
}
