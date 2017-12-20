/**
 * Module Dependencies
 */

import numeral from 'numeral';
import numeralLocale from 'numeral/locales/pt-br';

/**
 * Set locale
 */

numeral.locale('pt-br');

const Locale = {
	dictionary: {
		'new': 'Novo',
		'used': 'Usado'
	},
	currency: (number) => numeral(number).format('$ 0[,]0[.]00'),
	translate: function(word){
		return this.dictionary[word] || word
	}
}


export default Locale;