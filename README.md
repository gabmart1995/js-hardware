# JavaScript Hardware

Repositorio de practicas con arduino y jhonny-five para programar microcontroladores.

### Que incluye

- 00_hello_world: ejercio de parpaedear el led
- 01_loteria: simulacion de juego de loteria por consola usando un boton
- 02_seven_segments_anode: display que muestra 9 digitos
- 03_potenciometros: ejercio practico sobre el control de flujo de energía.

## Atención:
Leer con atención la documentación de serialport sobre las versiones de node
compatibles con el paquete. Ofrece soporte a sus binarios para descargar hasta node versión 12
tanto en sistemas Linux como Windows. 

Más informacion [aqui](https://serialport.io/docs/guide-platform-support)

Para versiones superiores de Node debes compilar manualmente las dependencias, pero asegurate de seguir los pasos de [instalación](https://serialport.io/docs/guide-installation#ubuntudebian-linux)

### requisitos
Recomendamos que para trabajar en este proyecto y no sabes compilar nativamente, tener la version LTS de Node version 12 es buena opción. Sino lo tienes instalado recomendamos instalar [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) o en windows [nvm-windows](https://github.com/coreybutler/nvm-windows) para gestionar las versiones de Node de tu sistema operativo.


## compilacion de serialport
O en caso de querer compilar manualmente el paquete, en linux necesitas el paquete `build-essential` para crear los binarios que se utilizan para trabajar.

`sudo apt install build-essential`

En Windows debes tener instalado Visual Studio seguir la instalación de [node-gyp](https://github.com/nodejs/node-gyp#installation) y tener paciencia.

## configuracion
En configuraciones linux o mac puede aparecer error "abriendo puerto serial" para solucionarlos 
debes añadir tu usuario a la lista de usuarios permitidos para manipular los puertos
primero revisa los permisos

`ls -l /dev/ttyACM*`  // linux y mac

Luego modifica la lista de usuarios con el siguiente comando

`sudo usermod -a -G dialout <username>` donde username es tu nombre de usuario. 

Debes cerrar sesión para que tome los cambios. con eso tienes acceso a los puertos


