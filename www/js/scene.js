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

//Pino
var coneTexture =  new THREE.ImageUtils.loadTexture("public/pino.jpg");
var coneRadius = 20;
var coneHeight = 30;
var coneRadialSegments = 4;
var coneHeightSegments = 65;
var coneX = 1;
var coneY = 25;
var coneZ = 0;
var geometryCone;
var cone;
for (var i = 0; i <= 2; i++){
	geometryCone = new THREE.ConeGeometry(coneRadius , 
												coneHeight, 
												coneRadialSegments,
												coneHeightSegments);
	var materialP = new THREE.MeshLambertMaterial({map:coneTexture}); 
	cone = new THREE.Mesh(geometryCone, materialP);
	cone.position.set(coneX, coneY, coneZ);
	scene.add( cone );
	coneRadius += 10;
	geometryCone += i;
	cone += i;
	coneY -= 17;
}
//Tronco
var CubeTexture = new THREE.ImageUtils.loadTexture("public/madera.jpg");
var geometryCube = new THREE.CubeGeometry(15,25,15);
var materialC =  new THREE.MeshBasicMaterial({map: CubeTexture});
var cube = new THREE.Mesh(geometryCube, materialC);
cube.position.set(1,-25,0);
scene.add( cube );
//colores de las esferas
var EsferaTexture0 = new THREE.ImageUtils.loadTexture("public/rojo.jpg");
var EsferaTexture1 = new THREE.ImageUtils.loadTexture("public/azul.jpeg");
var EsferaTexture2 = new THREE.ImageUtils.loadTexture("public/dorado.jpg");
var EsferaTexture3 = new THREE.ImageUtils.loadTexture("public/morado.jpg");
var EsferaTexture4 = new THREE.ImageUtils.loadTexture("public/verde.jpg");
//Esferas
var geometrySphere = new THREE.SphereGeometry( 2, 32, 32 );
var material;
var sphere;
var max = 10;
var min = -10;
for (var i = 0; i <= 4; i++){
	material = new THREE.MeshBasicMaterial( {map:EsferaTexture0} );
	sphere = new THREE.Mesh( geometrySphere, material );
	sphere.position.set(Math.round(Math.random() * (max - min) + min),
						Math.round(Math.random() * (max - min) + min),
						Math.round(Math.random() * (max - min) + min));
	scene.add(sphere);
	material += i;
	EsferaTexture0 ++;
}

//Estrella
var starTexture = new THREE.ImageUtils.loadTexture("public/star.png");
var squareGeometry = new THREE.Geometry();
var scuareMaterial = new THREE.MeshBasicMaterial({map: starTexture});
var scuareMesh = new THREE.Mesh(squareGeometry, scuareMaterial);
scuareMesh.position.set(0.0, 0.0, 0.0);
scene.add(scuareMesh);


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

function renderizar(){
	//Rotar pino
	//cone.rotation.y += .01;
	lienzo.render(scene, camara);
	requestAnimationFrame(renderizar);
}
//Llamar a la función
renderizar();

