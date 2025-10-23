# 🚚 TaskAppi

> Sistema de seguimiento de proyectos con integración de Notion API

[![Demo en vivo](https://img.shields.io/badge/Demo-En%20Vivo-success?style=for-the-badge&logo=fly.io)](https://taskappi.fly.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-Repositorio-181717?style=for-the-badge&logo=github)](https://github.com/Cast3c/notionAPIApp)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

## 📋 Descripción

**TaskAppi** es una aplicación full stack que permite gestionar el seguimiento a proyectos mediante la integración con Notion API. El sistema consume y visualiza datos de bases de datos de Notion, proporcionando una interfaz moderna y responsiva para el seguimiento de operaciones en tiempo real.

### ✨ Características Principales

- 🔄 **Integración con Notion API** - Consumo y sincronización de datos en tiempo real
- 🎨 **Interfaz Moderna** - UI desarrollada con React y componentes reutilizables
- 🚀 **Backend Robusto** - API REST construida con Node.js y Express
- 📱 **Diseño Responsivo** - Adaptable a cualquier dispositivo
- ⚡ **Deploy en Producción** - Aplicación funcionando en Fly.io
- 🔐 **Manejo Seguro de Credenciales** - Variables de entorno para API keys

---

## 🛠️ Stack Tecnológico

### Frontend
- **React** - Biblioteca para construir interfaces de usuario
- **Lucide React** - Iconografía moderna y optimizada
- **CSS3** - Estilos personalizados y responsive

### Backend
- **Node.js** - Entorno de ejecución JavaScript
- **Express.js** - Framework web minimalista
- **Axios** - Cliente HTTP para peticiones a APIs externas

### Infraestructura
- **Notion API** - Base de datos y contenido
- **Fly.io** - Plataforma de despliegue

---

## 🚀 Instalación y Configuración

### Prerrequisitos

```bash
Node.js >= 16.x
npm >= 8.x
Cuenta de Notion con API Key
```

### 1. Clonar el repositorio

```bash
git clone https://github.com/Cast3c/notionAPIApp.git
cd notionAPIApp
```

### 2. Instalar dependencias

```bash
# Instalar dependencias del backend
npm install

# Instalar dependencias del frontend
cd client
npm install
cd ..
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Notion API Configuration
NOTION_API_KEY=tu_notion_api_key_aqui
NOTION_DATABASE_ID=tu_database_id_aqui

# Server Configuration
PORT=3001
NODE_ENV=development
```

### 4. Obtener credenciales de Notion

1. Ve a [Notion Developers](https://www.notion.so/my-integrations)
2. Crea una nueva integración
3. Copia el **Internal Integration Token** (API Key)
4. Comparte tu base de datos de Notion con la integración
5. Copia el **Database ID** de la URL de tu base de datos

### 5. Ejecutar en desarrollo

```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
cd client
npm start
```

La aplicación estará disponible en:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`

---

## 📦 Estructura del Proyecto

```
notionAPIApp/
├── client/                 # Frontend React
│   ├── public/
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── services/      # Servicios de API
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                # Backend Node.js
│   ├── routes/           # Rutas de la API
│   ├── controllers/      # Lógica de negocio
│   ├── services/         # Servicios de Notion API
│   └── index.js
├── .env                  # Variables de entorno (no incluido)
├── .gitignore
├── package.json
└── README.md
```

---

## 🔌 API Endpoints

### Base URL: `https://taskappi.fly.dev/api`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/tasks` | Obtener todas las tareas |
| GET | `/tasks/:id` | Obtener tarea específica |
| POST | `/tasks` | Crear nueva tarea |
| PUT | `/tasks/:id` | Actualizar tarea |
| DELETE | `/tasks/:id` | Eliminar tarea |

### Ejemplo de Respuesta

```json
{
  "success": true,
  "data": [
    {
      "id": "abc123",
      "title": "Viaje Bogotá - Medellín",
      "status": "En curso",
      "driver": "Juan Pérez",
      "date": "2024-10-23"
    }
  ]
}
```

---

## 🌐 Deploy en Fly.io

### Desplegar tu propia instancia

```bash
# 1. Instalar Fly CLI
curl -L https://fly.io/install.sh | sh

# 2. Autenticarse
fly auth login

# 3. Crear app
fly launch

# 4. Configurar secretos
fly secrets set NOTION_API_KEY=tu_api_key
fly secrets set NOTION_DATABASE_ID=tu_database_id

# 5. Desplegar
fly deploy
```

---

## 💡 Características Técnicas

### Integración con Notion API

- **Autenticación Bearer Token** - Manejo seguro de credenciales
- **Consultas optimizadas** - Filtrado y paginación de resultados
- **Manejo de errores** - Retry logic y mensajes descriptivos
- **Cache estratégico** - Minimización de llamadas a la API

### Frontend React

- **Hooks personalizados** - Lógica reutilizable (useNotionData, useLoading)
- **Componentes funcionales** - Arquitectura moderna con Hooks
- **Estado global** - Context API para datos compartidos
- **Lazy loading** - Carga diferida de componentes

### Backend Express

- **Middleware personalizado** - Logging, CORS, error handling
- **Validación de datos** - Esquemas de validación para requests
- **Arquitectura REST** - Endpoints semánticos y escalables
- **Variables de entorno** - Configuración segura con dotenv

---

## 📸 Screenshots

### Dashboard Principal
*[Aquí puedes agregar un screenshot del dashboard]*

### Vista de Tareas
*[Aquí puedes agregar un screenshot de la lista de tareas]*

### Detalle de Viaje
*[Aquí puedes agregar un screenshot del detalle]*

> **Nota:** Para agregar screenshots, crea una carpeta `/docs/images/` y sube las imágenes. Luego reemplaza los placeholders con:
> ```markdown
> ![Dashboard](docs/images/dashboard.png)
> ```

---

## 🧪 Testing

```bash
# Ejecutar tests del backend
npm test

# Ejecutar tests del frontend
cd client
npm test

# Cobertura de tests
npm run test:coverage
```

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Roadmap

- [ ] Implementar autenticación de usuarios
- [ ] Agregar notificaciones push
- [ ] Dashboard con métricas y gráficas
- [ ] Exportación de reportes en PDF
- [ ] Integración con WhatsApp API
- [ ] App móvil con React Native
- [ ] Tests E2E con Cypress
- [ ] Modo offline con Service Workers

---

## 🐛 Reportar Problemas

¿Encontraste un bug? [Abre un issue](https://github.com/Cast3c/notionAPIApp/issues) detallando:

- Descripción del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots (si aplica)
- Entorno (navegador, OS, versión de Node.js)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Ricardo Castellar Páez**

- 💼 [Portfolio](https://cast3c.github.io/portfolio_react/)
- 💻 [GitHub](https://github.com/Cast3c)
- 📧 Email: ricardo.castellarp@gmail.com

---

## 🙏 Agradecimientos

- [Notion API Documentation](https://developers.notion.com/)
- [Full Stack Open](https://fullstackopen.com/) - Universidad de Helsinki
- [React Documentation](https://react.dev/)
- [Express.js](https://expressjs.com/)
- [Fly.io](https://fly.io/)

---

## 📚 Recursos Adicionales

- [Notion API Reference](https://developers.notion.com/reference/intro)
- [React Best Practices](https://react.dev/learn)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Fly.io Deployment Guide](https://fly.io/docs/)

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**

Hecho con ❤️ y ☕ por [Ricardo Castellar](https://github.com/Cast3c)

</div>
