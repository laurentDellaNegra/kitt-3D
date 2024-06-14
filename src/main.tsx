import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './index.css'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { ContactShadows } from '@react-three/drei'
import Kitt from './Kitt.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Canvas
            style={{ height: '100vh', backgroundColor: 'white' }}
            shadows
            camera={{ fov: 45 }}
        >
            <Kitt visible={true} />
            <ContactShadows frames={100} />
            <EffectComposer>
                <Bloom luminanceThreshold={1} intensity={1.25} mipmapBlur />
            </EffectComposer>
        </Canvas>
    </React.StrictMode>
)
