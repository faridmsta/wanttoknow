import React, { forwardRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Model = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/model/model.gltf')
  return (
    <group {...props} dispose={null}>
      <group ref={ref}   >

        <mesh

          castShadow
          receiveShadow
          geometry={nodes.head.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 1.7, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials['Material.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
})

export default Model

useGLTF.preload('/model/model.gltf')