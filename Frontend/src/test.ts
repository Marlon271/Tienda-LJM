// Este archivo es requerido por karma.conf.js y carga recursivamente todos los archivos .spec y de framework

// Importa las funcionalidades de testing de Zone.js, necesarias para las pruebas en Angular
import 'zone.js/testing';
// Importa getTestBed de @angular/core/testing para configurar el entorno de pruebas de Angular
import { getTestBed } from '@angular/core/testing';
// Importa BrowserDynamicTestingModule y platformBrowserDynamicTesting
// para pruebas en entornos de navegadores dinámicos
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Primero, inicializa el entorno de pruebas de Angular.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule, // Módulo de pruebas para navegadores dinámicos
  platformBrowserDynamicTesting(), // Plataforma de pruebas para navegadores dinámicos
);

