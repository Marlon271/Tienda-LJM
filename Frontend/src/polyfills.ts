/**
 * Este archivo incluye polyfills necesarios para Angular y se carga antes de la aplicación.
 * Puedes agregar tus propios polyfills adicionales a este archivo.
 *
 * Este archivo se divide en 2 secciones:
 *   1. Polyfills de navegador. Estos se aplican antes de cargar ZoneJS y están ordenados por navegadores.
 *   2. Importaciones de la aplicación. Archivos importados después de ZoneJS que deben cargarse antes de tu archivo principal.
 *
 * La configuración actual es para los llamados navegadores "evergreen"; las últimas versiones de navegadores que
 * se actualizan automáticamente. Esto incluye versiones recientes de Safari, Chrome (incluyendo
 * Opera), Edge en el escritorio, e iOS y Chrome en móviles.
 *
 * Aprende más en https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * POLYFILLS DE NAVEGADOR
 */

/**
 * Por defecto, zone.js parcheará todas las posibles macroTareas y eventos del DOM.
 * El usuario puede deshabilitar partes del parche de macroTareas/eventos del DOM estableciendo las siguientes banderas
 * porque esas banderas necesitan ser establecidas antes de que `zone.js` sea cargado, y webpack
 * pondrá la importación en la parte superior del paquete, por lo que el usuario necesita crear un archivo separado
 * en este directorio (por ejemplo: zone-flags.ts), y poner las siguientes banderas
 * en ese archivo, y luego agregar el siguiente código antes de importar zone.js.
 * import './zone-flags';
 *
 * Las banderas permitidas en zone-flags.ts se enumeran aquí.
 *
 * Las siguientes banderas funcionarán para todos los navegadores.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // deshabilita el parche requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // deshabilita el parche onProperty como onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // deshabilita el parche de nombres de eventos especificados
 *
 * en las herramientas de desarrollador de IE/Edge, el addEventListener también será envuelto por zone.js
 * con la siguiente bandera, evitará el parche de `zone.js` para IE/Edge
 *
 * (window as any).__Zone_enable_cross_context_check = true;
 *
 */
 
// Importa las banderas de zona personalizadas antes de cargar ZoneJS
import './zone-flags';

/***************************************************************************************************
 * Zone JS es requerido por defecto para Angular mismo.
 */
// Importa ZoneJS, que es incluido con Angular CLI y es necesario para el funcionamiento de Angular
import 'zone.js';

/***************************************************************************************************
 * IMPORTACIONES DE LA APLICACIÓN
 */

