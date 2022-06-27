# Prueba técnica para Enerclic

La prueba consistiría:

Con la API de Red Eléctrica de España: https://www.ree.es/es/apidatos crear una web con gráficas (maquetación web propia): https://www.ree.es/es/datos/aldia.

Requisitos: 

Usar Material-UI
Las gráficas deberán estar hechas en la librería React Apex Chart.
El diseño puede ser propio, se valora el cuidado del diseño.
Una vez terminado, lo puedes subir a tu repositorio de GitHub.
NOTA:  no es necesario usar Next.js, TypeScript ni incluir testing.

## Comenzando 🚀

Para lanzar el proyecto, simplemente haz npm install.

 Luego usa el siguiente comando para lanzar el proyecto:
 
    - npm start: Lanza el proyecto en una versión de desarrollo.

### Trabajo realizado 📋

Se ha realizado una pantalla con Material-UI que consta de un layout con header y footer y un componente para generar gráficas
según unas props.

### Componentes y estructura 🔧

Se ha creado un componente que acepta de manera genérica algunas props y permite funcionar con algunos de los tipos de gráficas
que ofrece React Apex Chart, como donut, line, area o bar. 

## Herramientas ⚙️

Para funciones genéricas, he creado un archivo tools donde hay algunas funciones usadas en el proyecto.

### Estilos 🔩

Para dar estilos CSS, se ha usado SCSS, creando estructuras anidadas cuando es necesario.

### API ⌨️

Para la llamada a la API se ha separado en un archivo aparte, en la carpeta services. Se ha creado una función 
para llamar a la API de la REE que acepta todos los parametros de dicha API.


