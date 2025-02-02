import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './locales/resources';

const initI18 = async () => {
	let savedLanguage = await AsyncStorage.getItem('app-language');
	if (!savedLanguage) {
		savedLanguage = 'en';
	}

	const i18n = i18next.createInstance();
	const options = {
		debug: true,
		LogLevel: 'error',
		resources,
		lng: savedLanguage,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	};

	i18n.use(initReactI18next).init(options);
};

export default initI18;
