//Obtener ancho y alto de la ventana
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

var lienzo = new THREE.WebGLRenderer({antialias: true});

// Lienzo encargado del renderizado
lienzo.setSize(WIDTH,HEIGHT);

//Color de fondo para el lienzo
lienzo.setClearColor (0x444444);
// Añadir lienzo a la página
document.body.appendChild(lienzo.domElement);

var scene = new THREE.Scene;

//Pino
var coneTexture =  new THREE.ImageUtils.loadTexture("public/pino.jpg");
var geometryCone = new THREE.ConeGeometry( 20, 30, 4, 65 );
var materialP = new THREE.MeshLambertMaterial({map:coneTexture}); 
var cone = new THREE.Mesh(geometryCone, materialP);
cone.position.set(1,25,0);
scene.add( cone );
//pino2
var cone1Texture =  new THREE.ImageUtils.loadTexture("public/pino.jpg");
var geometryCone1 = new THREE.ConeGeometry( 30, 30, 4, 70 );
var materialP = new THREE.MeshLambertMaterial({map:cone1Texture}); 
var cone1 = new THREE.Mesh(geometryCone1, materialP);
cone1.position.set(1,8,0);
scene.add( cone1 );
//pino3
var cone2Texture =  new THREE.ImageUtils.loadTexture("public/pino.jpg");
var geometryCone2 = new THREE.ConeGeometry( 40, 30, 4, 70 );
var materialP = new THREE.MeshLambertMaterial({map: cone2Texture}); 
var cone2 = new THREE.Mesh(geometryCone2, materialP);
cone2.position.set(1,-10,0);
scene.add( cone2 );
//base
var CubeTexture = new THREE.ImageUtils.loadTexture("public/madera.jpg");
var geometryCube = new THREE.CubeGeometry(15,25,15);
var materialC =  new THREE.MeshBasicMaterial({map: CubeTexture});
var cube = new THREE.Mesh(geometryCube, materialC);
cube.position.set(1,-25,0);
scene.add( cube );

//regalos
var CubeTexture = new THREE.ImageUtils.loadTexture("public/regalo.jpg");
var geometryCube = new THREE.CubeGeometry(10,10,10);
var materiaC =  new THREE.MeshBasicMaterial({map: CubeTexture});
var cube1 = new THREE.Mesh(geometryCube, materiaC);
cube1.position.set(-15,-33,10);
scene.add( cube1 );

var CubeTexture = new THREE.ImageUtils.loadTexture("public/regalo1.jpg");
var geometryCube = new THREE.CubeGeometry(10,10,10);
var materiaC =  new THREE.MeshBasicMaterial({map: CubeTexture});
var cube2 = new THREE.Mesh(geometryCube, materiaC);
cube2.position.set(15,-33,10);
scene.add( cube2 );

//muñeco de nieve que se convirtio en pato :D
var muñecoTexture = new THREE.ImageUtils.loadTexture("public/nieve.jpg");
var Sphere = new THREE.SphereGeometry( 15, 35, 35 );
var material = new THREE.MeshBasicMaterial( {map:muñecoTexture} );
var muñeco = new THREE.Mesh( Sphere, material );
muñeco.position.set(49,-25,15);
scene.add(muñeco);

var muñecoTexture = new THREE.ImageUtils.loadTexture("public/nieve.jpg");
var Sphere = new THREE.SphereGeometry( 10, 30, 30 );
var material = new THREE.MeshBasicMaterial( {map:muñecoTexture} );
var muñeco1 = new THREE.Mesh( Sphere, material );
muñeco1.position.set(49,-3,15);
scene.add(muñeco1);
//ojos
var muñecoTexture = new THREE.ImageUtils.loadTexture("color:black");
var Sphere = new THREE.SphereGeometry( 1.5, 15, 15 );
var material = new THREE.MeshBasicMaterial( {map:muñecoTexture} );
var muñeco2 = new THREE.Mesh( Sphere, material );
muñeco2.position.set(50,-2,30);
scene.add(muñeco2);

var muñecoTexture = new THREE.ImageUtils.loadTexture("color:black");
var Sphere = new THREE.SphereGeometry( 1.5, 15, 15 );
var material = new THREE.MeshBasicMaterial( {map:muñecoTexture} );
var muñeco3 = new THREE.Mesh( Sphere, material );
muñeco3.position.set(40,-2,30);
scene.add(muñeco3);

var muñecoTexture = new THREE.ImageUtils.loadTexture("color:black");
var Sphere = new THREE.SphereGeometry( 1.5, 15, 15 );
var material = new THREE.MeshBasicMaterial( {map:muñecoTexture} );
var muñeco4 = new THREE.Mesh( Sphere, material );
muñeco4.position.set(45,-16,30);
scene.add(muñeco4);

var muñecoTexture = new THREE.ImageUtils.loadTexture("color:black");
var Sphere = new THREE.SphereGeometry( 1.5, 15, 15 );
var material = new THREE.MeshBasicMaterial( {map:muñecoTexture} );
var muñeco5 = new THREE.Mesh( Sphere, material );
muñeco5.position.set(45,-22,30);
scene.add(muñeco5);

var muñecoTexture = new THREE.ImageUtils.loadTexture("color:black");
var Sphere = new THREE.SphereGeometry( 1.5, 15, 15 );
var material = new THREE.MeshBasicMaterial( {map:muñecoTexture} );
var muñeco6 = new THREE.Mesh( Sphere, material );
muñeco6.position.set(45,-28,30);
scene.add(muñeco6);

var narizTexture =  new THREE.ImageUtils.loadTexture("public/naranja.jpg");
var geometryCone2 = new THREE.ConeGeometry(5, 5, 4, 10 );
var materialP = new THREE.MeshLambertMaterial({map: narizTexture}); 
var nariz = new THREE.Mesh(geometryCone2, materialP);
nariz.position.set(45,-2,30);
scene.add( nariz );


//colores de las esferas
var EsferaTexture = new THREE.ImageUtils.loadTexture("public/rojo.jpg");
var EsferaTexture1 = new THREE.ImageUtils.loadTexture("public/azul.jpeg");
var EsferaTexture2 = new THREE.ImageUtils.loadTexture("public/dorado.jpg");
var EsferaTexture3 = new THREE.ImageUtils.loadTexture("public/morado.jpg");
var EsferaTexture4 = new THREE.ImageUtils.loadTexture("public/verde.jpg");
var EsferaTexture5 = new THREE.ImageUtils.loadTexture("public/naranja.jpg");

//Esferas 1er piso
var geometrySphere = new THREE.SphereGeometry( 2.5, 35, 35 );
var material = new THREE.MeshBasicMaterial( {map:EsferaTexture} );
var sphere = new THREE.Mesh( geometrySphere, material );
sphere.position.set(2,5,7);
cone.add(sphere);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture5} );
var sphere2 = new THREE.Mesh( geometrySphere, material );
sphere2.position.set(9,-2,-6);
cone.add(sphere2);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture3} );
var sphere3 = new THREE.Mesh( geometrySphere, material );
sphere3.position.set(15,-12,6);
cone.add(sphere3);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture1} );
var sphere4 = new THREE.Mesh( geometrySphere, material );
sphere4.position.set(-15,-12,5);
cone.add(sphere4);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture} );
var sphere5 = new THREE.Mesh( geometrySphere, material );
sphere5.position.set(-5,-5,-10);
cone.add(sphere5);

//Esferas 2do piso
var material = new THREE.MeshBasicMaterial( {map:EsferaTexture5} );
var sphere6 = new THREE.Mesh( geometrySphere, material );
sphere6.position.set(17,-11,10);
cone1.add(sphere6);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture1});
var sphere7 = new THREE.Mesh( geometrySphere, material );
sphere7.position.set(-20,-10,-6);
cone1.add(sphere7);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture});
var sphere8 = new THREE.Mesh( geometrySphere, material );
sphere8.position.set(17,-11,-11);
cone1.add(sphere8);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture3});
var sphere9 = new THREE.Mesh( geometrySphere, material );
sphere9.position.set(-4,-3,-17);
cone1.add(sphere9);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture4});
var sphere11 = new THREE.Mesh( geometrySphere, material );
sphere11.position.set(8,-1,-11);
cone1.add(sphere11);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture2} );
var sphere12 = new THREE.Mesh( geometrySphere, material );
sphere12.position.set(-15,-6,10);
cone1.add(sphere12);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture4} );
var sphere13 = new THREE.Mesh( geometrySphere, material );
sphere13.position.set(-5,-1,15);
cone1.add(sphere13);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture3});
var sphere14 = new THREE.Mesh( geometrySphere, material );
sphere14.position.set(8,-1,-11);
cone1.add(sphere14);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture});
var sphere15 = new THREE.Mesh( geometrySphere, material );
sphere15.position.set(10,0,6);
cone1.add(sphere15);

 //Esferas tercer piso
var material = new THREE.MeshBasicMaterial( {map:EsferaTexture5} );
var sphere16 = new THREE.Mesh( geometrySphere, material );
sphere16.position.set(-15,-10,-21);
cone2.add(sphere16);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture} );
var sphere17 = new THREE.Mesh( geometrySphere, material );
sphere17.position.set(5,-5,-25);
cone2.add(sphere17);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture4} );
var sphere18 = new THREE.Mesh( geometrySphere, material );
sphere18.position.set(-15,-2,-10);
cone2.add(sphere18);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture3} );
var sphere19 = new THREE.Mesh( geometrySphere, material );
sphere19.position.set(-15,-2,12);
cone2.add(sphere19);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture} );
var sphere20 = new THREE.Mesh( geometrySphere, material );
sphere20.position.set(-10,-13,30);
cone2.add(sphere20);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture2} );
var sphere21 = new THREE.Mesh( geometrySphere, material );
sphere21.position.set(-2,-5,25);
cone2.add(sphere21);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture1} );
var sphere22 = new THREE.Mesh( geometrySphere, material );
sphere22.position.set(10,-13,10);
cone2.add(sphere22);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture4} );
var sphere23 = new THREE.Mesh( geometrySphere, material );
sphere23.position.set(10,-10,25);
cone2.add(sphere23);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture1} );
var sphere24 = new THREE.Mesh( geometrySphere, material );
sphere24.position.set(25,-2,2);
cone2.add(sphere24);

// Generar cámara
var camara = new THREE.PerspectiveCamera(
    45, // Campo de visión
    (WIDTH / HEIGHT), // Proporcion
    0.1,
    10000 // Campo de visión
);

//Posición cámara  
camara.position.y = 10; // Elevar cámara
camara.position.z = 170; // Alejar cámara


//Añadir cámara a la escena
scene.add(camara);

// Add a fog effect to the scene
scene.fog = new THREE.Fog(0x6C474A, 100, 950);

//Luz puntual en el centro de la pantalla
var light1 = new THREE.PointLight(0xffffff);
light1.position.set(0,0,0);

//Luz ambiental suave
var light2 = new THREE.AmbientLight( 0xffffff ); 
light2.position.set(0,0,0);

//Añadir luces a la escena
scene.add(light1);
scene.add(light2);

//Orbit controls
let controls = new THREE.OrbitControls(camara, lienzo.domElement);

function playSound() {
	var sound = document.getElementById("audio");
	sound.currentTime = 1;
	sound.play();
}
function renderizar(){
	//Rotar pino
	cone.rotation.y +=.01;
	cone1.rotation.y +=.01;
	cone2.rotation.y +=.01;
	lienzo.render(scene, camara);
	requestAnimationFrame(renderizar);
}

//Llamar a la función
renderizar();
playSound();
