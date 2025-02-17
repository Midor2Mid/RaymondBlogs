"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Box } from "@react-three/drei"

export default function ProjectCard3D({ project, index, active, setActive, position }) {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.position.y = active === index ? 0 : -0.1
      mesh.current.scale.x = active === index ? 1.5 : 1
      mesh.current.scale.y = active === index ? 1.5 : 1
      mesh.current.scale.z = active === index ? 1.5 : 1
    }
  })

  return (
    <Box
      ref={mesh}
      args={[1, 1.5, 0.1]}
      onClick={() => setActive(index)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={position}
    >
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      <Text position={[0, 0, 0.06]} fontSize={0.1} color="#000" anchorX="center" anchorY="middle">
        {project.title}
      </Text>
    </Box>
  )
}

