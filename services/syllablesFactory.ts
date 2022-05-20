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

export const bySyllableGenerator = (): string[] => {
  const syllablesArray = syllables.map((syllable) => `${syllable}-${getRandomSyllable()}`)
  return syllablesArray.sort(function () { return Math.random() - 0.5 })
}
