# Sistema de Gestión para Ferretería Carnevale

## Descripción

Sistema web y aplicación móvil PWA para la gestión de inventario, pedidos y proveedores de Ferretería Carnevale.

## Características

### Versión Web Completa
- Dashboard en tiempo real
- Gestión de faltantes
- Pedidos a proveedores
- Recepción de mercadería
- Historial completo
- Catálogo de productos y proveedores
- Configuración del sistema

### Versión Móvil PWA
- Reporte rápido de faltantes
- Vista de faltantes pendientes
- Estadísticas básicas
- Diseño mobile-first
- Instalable como app nativa

## Tecnologías

- HTML5, CSS3, JavaScript
- Firebase (Firestore, Authentication)
- PWA (Service Workers, Manifest)

## Instalación

1. Clonar el repositorio
2. Configurar Firebase en `index.html` e `index_mobile.html`
3. Abrir `index.html` en el navegador para la versión web
4. Para la versión móvil, abrir `index_mobile.html` en un dispositivo móvil y añadir a la pantalla de inicio

## Configuración de Firebase

Reemplazar la configuración en ambos archivos HTML:

```javascript
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};
