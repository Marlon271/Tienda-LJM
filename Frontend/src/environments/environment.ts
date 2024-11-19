// Este archivo puede ser reemplazado durante la construcción usando el array `fileReplacements`.
// `ng build` reemplaza `environment.ts` con `environment.prod.ts`.
// La lista de reemplazos de archivos se puede encontrar en `angular.json`.

export const environment = {
  production: false, // Indica si el entorno es de producción
  apiResrURL: 'http://localhost:8080' // URL base para las llamadas a la API REST
};

/*
 * Para facilitar la depuración en modo de desarrollo, puedes importar el siguiente archivo
 * para ignorar los marcos de pila de errores relacionados con la zona como `zone.run`, `zoneDelegate.invokeTask`.
 *
 * Esta importación debe estar comentada en modo de producción porque tendrá un impacto negativo
 * en el rendimiento si se lanza un error.
 */
// import 'zone.js/plugins/zone-error';  // Incluido con Angular CLI.

