#Debug on device

- ionic cordova run android --device -l -c

#Build

- +1 version config.xml

- ionic cordova build android --prod --release

- keytool -genkey -v -keystore rubiks-cube.keystore -alias rubiks-cube -keyalg RSA -keysize 2048 -validity 10000 (first time)

- keytool -list -keystore rubiks-cube.keystore

- jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore rubiks-cube.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk rubiks-cube

- rm rubiks-cube.apk && zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk rubiks-cube.apk


### Próximos pasos

- Movimientos táctiles

    - añadir movimientos de capas centrales
    - revisar x, y, z bitS
    - resto de movimientos
    - touch event mobile
    - mostrar / ocultar botones
    
- Solución básica

    - definir estado del cubo con los colores
    
- Próximos pasos
    
    Array de 54 colores
    Con la intersección saco el color y la posición. Miro el color en el array para saber la cara y por tanto el movimiento.


- Ruido del cubo de Rubik







