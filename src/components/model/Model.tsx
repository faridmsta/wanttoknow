import * as THREE from 'three';
import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    head: THREE.Mesh;
    body: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
  };
};

type ModelProps = JSX.IntrinsicElements['group'] & {
  ref?: React.Ref<THREE.Group>;
};

const Model = forwardRef<THREE.Group, ModelProps>((props, ref) => {
  const { nodes, materials } = useGLTF('/model/model.gltf') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group ref={ref}>
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
  );
});

useGLTF.preload('/model/model.gltf');

export default Model;
