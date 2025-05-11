import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import Model from '../model/Model';

import { useState } from 'react';


function Scene() {

    return <></>


    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const modelHead = useRef<THREE.Group | null>(null);
    const [target, setTarget] = useState<[number, number, number]>([0, 0, 0]);

    useEffect(() => {
        const handleMove = (event: MouseEvent) => {
            if (wrapperRef.current) {
                const { offsetWidth: width, offsetHeight: height } = wrapperRef.current;

                // Normalize mouse position to [-1, 1] for `lookAt` calculations
                const mouseX = (event.clientX / width) * 2 - 1;
                const mouseY = (event.clientY / height) * 2 - 1;

                // Update the target state
                setTarget([mouseX * 0.8, -mouseY * 0.8, 2]);
            }
        };

        window.addEventListener('mousemove', handleMove);

        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    useEffect(() => {
        if (modelHead.current) {
            modelHead.current.lookAt(...target);
        }
    }, [target]);

    return (
        <div
            className="wrapper"
            ref={wrapperRef}
            style={{ width: '100%', height: '100%' }}
        >
            <Canvas
                style={{ height: '110vh', width: '100%' }}
                camera={{
                    position: [0, -1, 2],
                }}
            >
                
                <Model position={[0, -0.5, 0]} ref={modelHead} />
                <ambientLight intensity={2} />
            </Canvas>
        </div>
    );
}

export default Scene;
