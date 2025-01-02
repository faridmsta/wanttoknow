import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
  }
  materials: {
    MailBox: THREE.MeshStandardMaterial
  }
}

export function MailBoxModel(props: JSX.IntrinsicElements['group']) {
  const objectRef = useRef<THREE.Group<THREE.Object3DEventMap> | null>(null)


  const { nodes, materials } = useGLTF('/mail_box/scene.gltf') as GLTFResult

  useFrame(() => {
    if (objectRef.current) {
      objectRef.current.rotation.y += 0.01; // Adjust the speed as needed
    }
  });

  return (
    <group
      ref={objectRef}
      scale={1.7} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.MailBox}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/mail_box/scene.gltf')