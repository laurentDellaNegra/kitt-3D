import { useGLTF } from '@react-three/drei'
import { DissolveMaterial } from './DissolveMaterial'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

interface Props {
    visible: boolean
}

export default function Kitt({ visible }: Props) {
    const car = useRef<THREE.Mesh>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const model: any = useGLTF('./kitt.glb')

    const radius = 6 // Radius of the circular path
    const speed = 0.1 // Speed of rotation

    useFrame((state) => {
        if (car.current) {
            const elapsedTime = state.clock.getElapsedTime()
            const x = radius * Math.sin(elapsedTime * speed)
            const z = radius * Math.cos(elapsedTime * speed)
            state.camera.position.set(x, 1.8, z)
            state.camera.lookAt(car.current.position)
        }
    })
    return (
        <group dispose={null}>
            <mesh
                ref={car}
                rotation-x={4.7}
                geometry={model.nodes.Object_2.geometry}
                material={model.materials['rr.KR.Base']}
            >
                <DissolveMaterial
                    duration={2.1}
                    baseMaterial={model.materials['rr.KR.Base']}
                    visible={visible}
                    color="#ef4444"
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('./kitt.glb')
