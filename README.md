# My Node.js Error Handling Project

Este proyecto integra un sistema de captura de errores en un servidor Node.js utilizando Express, Winston para logs locales y Sentry para reporte de errores en la nube.

## 📦 Tecnologías Usadas

- Node.js
- Express
- Winston (logger)
- Sentry (monitorización remota)
- PM2 (opcional para producción)

## 🚀 Instalación

```bash
git clone https://github.com/tuusuario/my-nodejs-project.git
cd my-nodejs-project
npm install
```

## ⚙️ Configuración

Crea un archivo `.env` en la raíz con tu DSN de Sentry:

```env
SENTRY_DSN=https://<your-dsn>@sentry.io/<your-project-id>
```

## 🏃‍♂️ Uso

Para iniciar el servidor:

```bash
npm start
```

### Ruta de prueba de errores

Visita: `http://localhost:3000/api/error` para generar un error.

## 🔁 Uso de PM2 (opcional)

```bash
npm install -g pm2
pm2 start src/app.js --name "my-nodejs-app"
pm2 monit
```

## 📝 Estructura del Proyecto

- `src/` → Código fuente
- `config/logger.js` → Configuración de Winston y Sentry
- `errorHandler.js` → Middleware global de errores
- `routes/apiRoutes.js` → Rutas que generan errores
- `.env` → Variables de entorno (no se sube a GitHub)

## 📄 Licencia

Este proyecto está bajo licencia MIT.
