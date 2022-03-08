import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'


import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';
import 'bootstrap/dist/js/bootstrap.js';




i18n
  // Ativa o i18n backend;
  .use(HttpApi)
  // Ativando a detecção automatica de linguas;
	  .use(LanguageDetector)
	  // Usando hook porque eu gosto, so isso;
	  .use (initReactI18next)
		
	  .init({
	    supportedLngs: ['pt', 'en', 'es'],
	    fallbackLng: 'pt',
	    debug: false,
	    // Options for language detector
	   detection: {
	      order: ['path', 'cookie', 'htmlTag'],
	      caches: ['cookie'],
		 },
			
	    // react: { useSuspense: false },
	    backend: {
	      loadPath: '/locales/{{lng}}/translation.json',
	    },
			
  })
 

export default i18n;

