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

    useFrame((_state, delta) => {
        if (car.current) {
            car.current.rotation.z += delta * 0.2
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
                    baseMaterial={model.materials['rr.KR.Base']}
                    visible={visible}
                    color="#ef4444"
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('./kitt.glb')
