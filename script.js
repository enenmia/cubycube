//scene
const scene=new THREE.Scene()

//object
const geometry=new THREE.BoxGeometry(1,1,1)
const material =new THREE.MeshBasicMaterial({color:'blue'})
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)

//sizes
const sizes={
    width:800,
    height:600
}

//camera
const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z=3
camera.position.x=1
camera.position.y=0.8
scene.add(camera)

//canvas
const canvas=document.querySelector('.webgl')

//renderer
const renderer=new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(sizes.width,sizes.height)

renderer.render(scene,camera)
