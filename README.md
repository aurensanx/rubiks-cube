#Debug on device

- ionic cordova run android --device -l -c

#Build

- +1 version config.xml

- ionic cordova build android --prod --release

- keytool -genkey -v -keystore rubiks-cube.keystore -alias rubiks-cube -keyalg RSA -keysize 2048 -validity 10000 (first time)

- keytool -list -keystore rubiks-cube.keystore

- jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore rubiks-cube.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk rubiks-cube

- rm rubiks-cube.apk && zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk rubiks-cube.apk


### Cube Definition


    - Pieces
     
            0  1  2 
            3  4  5 
            6  7  8 
            
            9  10 11 
            12 13 14 
            15 16 17 
            
            18 19 20 
            21 22 23 
            24 25 26


    - Colors
    
                36 40 37
                43 44 41
                39 42 38
    
    3  7  11    0  4  8     1  5  9     10 6  2  
    15 19 23    12 16 20    13 17 21    22 18 14   
    27 31 35    24 28 32    25 29 33    34 30 26
    
                45 49 46
                52 53 50
                48 51 47


### Próximos pasos
    
- Ruido 

- Cambio de idioma







