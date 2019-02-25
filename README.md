# Agentero test

El proyecto base sobre el que se ha montado la aplicación es un proyecto en el que he participado que puedes encontrar [aquí](https://github.com/NoCountryForGeeks/react-boilerplate).

En la aplicación se usa una arquitectura sobre **react** que incluye **redux**, **redux-saga** y **redux-act** para la parte del manejo de estado de la aplicación. En la parte de estilos se usa **css-modules** para tener estilos por componentes y evitar la colisión de estilos globales y permitir la composición de clases. Para la parte de transiciones que depende del ciclo de vida de **react** se ha usado **react-spring**, para las traducciones de la página (infiere español e ingles del navegador) se ha usado **i18n** y **react-i18n** con el lazy loading de los idiomas para que la app sea lo mas pequeña posible. En cuanto al preprocesador se ha usado **webpack 4** con multiples loaders y optimizaciones para todo tipo de ficheros, js, css, jpg, svg, etc. También se generan archivos comprimidos en .gzip y .br para conseguir el máximo performance de carga de la aplicación y tener la máxima experiencia de usuario. el proyecto tiene también configuraciones para lanzar el entorno en un contenedor docker (con VS Code y las extensiones necesarias) o para desplegar nuestra aplicación en un contenedor. Por último, la build tiene una configuración para sacar el reporte de nuestra aplicación y ver como evoluciona el tamaño de nuestro bundle y nuestros chunks.

## Arranque del proyecto en desarrollo

1 - ```yarn```
2 - ```yarn start```

## Generar build del proyecto

1 - ```yarn```
2 - ```yarn build```
