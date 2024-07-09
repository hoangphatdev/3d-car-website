import {useGLTF} from "@react-three/drei"
import { useEffect } from "react"
const VNFlag = ()=>{
    const gltf = useGLTF("/3d/environment/vietnams_flag/scene.gltf")
    useEffect(()=>{
        gltf.scene.scale.set(0.1,0.1,0.1 )
        gltf.scene.position.set(0,3,-10)
    },[gltf])
    return(
            <primitive object={gltf.scene}/>
        
    )
}
export default VNFlag