# Bolsi Web

Aplicacion React + TypeScript + Vite preparada para desplegarse en un VPS con Docker.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build local

```bash
npm run build
```

## Despliegue simple en VPS

Este modo sirve la aplicacion directamente con Nginx dentro del contenedor. Es util si vas a poner otro proxy por fuera o si solo necesitas exponer un puerto HTTP.

```bash
cp .env.deploy.example .env
docker compose -f docker-compose.simple.yml up -d --build
```

Por defecto queda disponible en `http://TU_IP:8080`. Para cambiar el puerto, edita `APP_PORT` en `.env`.

## Despliegue de produccion con dominio y SSL

Este modo levanta la aplicacion y un proxy Caddy. Caddy escucha en los puertos `80` y `443`, crea el certificado TLS automaticamente para el dominio, redirige HTTP a HTTPS y renueva el certificado sin tareas cron adicionales.

Requisitos del VPS:

- Docker y Docker Compose instalados.
- Registros DNS `A` o `AAAA` del dominio apuntando al VPS.
- Puertos `80` y `443` abiertos en firewall y proveedor cloud.
- Ningun otro servicio usando los puertos `80` o `443`.
- `.env` con `DOMAIN` y `ACME_EMAIL` configurados.

Configura el dominio:

```bash
cp .env.deploy.example .env
nano .env
```

Ejemplo:

```dotenv
DOMAIN=bolsi.example.com
ACME_EMAIL=admin@example.com
```

Levanta el stack:

```bash
docker compose -f docker-compose.proxy.yml up -d --build
```

Ver logs del proxy:

```bash
docker compose -f docker-compose.proxy.yml logs -f proxy
```

Comprobar estado:

```bash
docker compose -f docker-compose.proxy.yml ps
```

Actualizar una nueva version:

```bash
git pull
docker compose -f docker-compose.proxy.yml up -d --build
```

Los certificados y llaves quedan en el volumen Docker `caddy_data`; no borres ese volumen en produccion. Para hacer backup:

```bash
docker run --rm -v bolsi-web_caddy_data:/data -v "$PWD:/backup" alpine tar czf /backup/caddy_data_backup.tar.gz -C /data .
```

## Archivos de despliegue

- `Dockerfile`: compila la app con Node y sirve `dist` con Nginx.
- `deploy/nginx/default.conf`: configuracion Nginx para SPA con fallback a `index.html`.
- `docker-compose.simple.yml`: despliegue directo por puerto HTTP.
- `docker-compose.proxy.yml`: despliegue con Caddy como proxy HTTPS automatico.
- `deploy/caddy/Caddyfile`: proxy de dominio hacia el contenedor de la app.

---

## Plantilla original

React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
