//Obtener ancho y alto de la ventana
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

var lienzo = new THREE.WebGLRenderer({antialias: true});

// Lienzo encargado del renderizado
lienzo.setSize(WIDTH,HEIGHT);

//Color de fondo para el lienzo
lienzo.setClearColor (0x6C474A);
// Añadir lienzo a la página
document.body.appendChild(lienzo.domElement);

var scene = new THREE.Scene;

//Color aleatorio
function generarcolor() {
	long = 6;
	var caracteres = "0123456789ABCDEF";
	var color = "";
	for (i = 0; i < long; i++) color += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
	color = "#" + color;
	return color;
}
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
//colores de las esferas
var EsferaTexture = new THREE.ImageUtils.loadTexture("public/rojo.jpg");
var EsferaTexture1 = new THREE.ImageUtils.loadTexture("public/azul.jpeg");
var EsferaTexture2 = new THREE.ImageUtils.loadTexture("public/dorado.jpg");
var EsferaTexture3 = new THREE.ImageUtils.loadTexture("public/morado.jpg");
var EsferaTexture4 = new THREE.ImageUtils.loadTexture("public/verde.jpg");

//Esferas 1er piso
var geometrySphere = new THREE.SphereGeometry( 2, 32, 32 );
var material = new THREE.MeshBasicMaterial( {map:EsferaTexture} );
var sphere = new THREE.Mesh( geometrySphere, material );
sphere.position.set(2,5,7);
cone.add(sphere);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture2} );
var sphere2 = new THREE.Mesh( geometrySphere, material );
sphere2.position.set(3,-20,3);
cone.add(sphere2);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture3} );
var sphere3 = new THREE.Mesh( geometrySphere, material );
sphere3.position.set(15,-12,6);
cone.add(sphere3);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture1} );
var sphere4 = new THREE.Mesh( geometrySphere, material );
sphere4.position.set(-15,-12,6);
cone.add(sphere4);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture4} );
var sphere5 = new THREE.Mesh( geometrySphere, material );
sphere5.position.set(-5,-5,-10);
cone.add(sphere5);

//Esferas 2do piso
var material = new THREE.MeshBasicMaterial( {map:EsferaTexture2} );
var sphere6 = new THREE.Mesh( geometrySphere, material );
sphere6.position.set(17,-11,10);
cone1.add(sphere6);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture1});
var sphere7 = new THREE.Mesh( geometrySphere, material );
sphere7.position.set(-25,-15,-6);
cone1.add(sphere7);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture});
var sphere8 = new THREE.Mesh( geometrySphere, material );
sphere8.position.set(17,-11,-11);
cone1.add(sphere8);

 /*/Esferas tercer piso
var material = new THREE.MeshBasicMaterial( {map:EsferaTexture1} );
var sphere9 = new THREE.Mesh( geometrySphere, material );
sphere6.position.set(-20,-50,-20);
cone.add(sphere9);

var material = new THREE.MeshBasicMaterial( {map:EsferaTexture2} );
var sphere10 = new THREE.Mesh( geometrySphere, material );
sphere10.position.set(17,10,10);
cone.add(sphere10);

/*/
//Estrella
/*var starTexture = new THREE.ImageUtils.loadTexture("public/star.png");
var geometryScuare = new THREE.Geometry();
var scuareGeometry = new THREE.MeshBasicMaterial({geometryScuare, starTexture});*/
//scuareGeometry.position.set(0,0,0);

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

//Fijar cámara en la pirámide
//camara.lookAt(cone2.position);

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

function renderizar(){
	//Rotar pirámide en eje z
	cone.rotation.y +=.01;
	cone1.rotation.y +=.01;
	cone2.rotation.y +=.01;
	lienzo.render(scene, camara);
	requestAnimationFrame(renderizar);
}
//Llamar a la función
renderizar();

