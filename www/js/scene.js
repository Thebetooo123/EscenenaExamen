//Obtener ancho y alto de la ventana
var WIDTH = window.innerWidth - 5;
var HEIGHT = window.innerHeight - 10;

var lienzo = new THREE.WebGLRenderer({antialias: true});

// Lienzo encargado del renderizado
lienzo.setSize(WIDTH,HEIGHT);

//Color de fondo para el lienzo
lienzo.setClearColor (0xD0F4C7, 1);
// Añadir lienzo a la página
document.body.appendChild(lienzo.domElement);

var scene = new THREE.Scene;

//Pino
var geometryCone = new THREE.ConeGeometry( 40, 120, 4 );
var materialP = new THREE.MeshLambertMaterial({color:0x004606});
var cone = new THREE.Mesh(geometryCone, materialP);
cone.position.set(0,0,0);


// Generar cámara
var camara = new THREE.PerspectiveCamera(
    45, // Campo de visión
    (WIDTH / HEIGHT), // Proporcion
    0.1,
    10000 // Campo de visión
);

//Posición cámara  
camara.position.y = 30; // Elevar cámara
camara.position.z = 170; // Alejar cámara

//Fijar cámara en la pirámide
camara.lookAt(cone.position);

//Añadir cámara a la escena
scene.add(camara);

//Luz puntual en el centro de la pantalla
var light1 = new THREE.PointLight(0xff0044);
light1.position.set(0,0,0);

//Luz ambiental suave
var light2 = new THREE.AmbientLight( 0x404040 ); 
light2.position.set(0,0,0);

//Añadir luces a la escena
scene.add(light1);
scene.add(light2);

//Orbit controls
let controls = new THREE.OrbitControls(camara, lienzo.domElement);

function renderizar(){
	//Rotar pirámide en eje z
	cone.rotation.y +=.01;
	
	lienzo.render(scene, camara);
	requestAnimationFrame(renderizar);
}
//Agregar a la escena la piramide
scene.add(cone);
//Llamar a la función
renderizar();
