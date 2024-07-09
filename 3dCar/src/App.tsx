import { Suspense , useState } from "react";
import { Canvas   } from "@react-three/fiber";
import "./index.css";
import Toyota_gr_supra_2023_view from "./3d/view/Toyota_gr_supra_2023_view";


const App = () => {  
  const [color, setColor] = useState("#e3b127")
  const clickHandle = (data)=>{
    setColor(data)
  }

  return (
    <div>
      <div className="flex justify-center ">
          <Suspense fallback={null}>
            <div className="w-screen  flex flex-col justify-center items-center">
              <div className="w-screen h-screen">
                <Canvas shadows>
                {/* <Crown_s209_view color={color}/> */}
                {/* <Porche_gt3_911_view color={color}/> */}
                {/* <Toyota_altis_2020_view color={color}/> */}
                {/* <Mercedes_amg_2021_view color={color}/> */}
                {/* <Toyota_supra_1998_view color={color}/> */}
                {/* <Bmw_nazcaC2_2017_view color={color}/> */}
                {/* <Toyota_fortuner_2021_view color={color}/> */}
                {/* <Mercedes_g65_2018_view color={color}/> */}
                {/* <Nissan_r35_2024_view color={color}/> */}
                {/* <Mercedes_maybach_2022_view color={color}/> */}
                {/* <Nissan_cefiro_a31_view color={color}/> */}
                {/* <Toyota_celica_1994_view color={color}/> */}
                <Toyota_gr_supra_2023_view color={color}/>
                {/* <Bmw_m3_2021_view color={color}/> */}
                {/* <Mercedes_cls_2024_view color={color}/> */}
                {/* <Audi_r8_2020_view color={color}/> */}
                {/* <Audi_a8_2018_view color={color}/> */}
              </Canvas>
              </div>
              <div>
                <section
                data="#FF00FF"
                onClick={(e) => {
                  clickHandle(e.target.getAttribute("data"));
                }}
                className="w-[100px] h-[100px] bg-red-500"
              />
              <section
                data="#00FF00"
                onClick={(e) => {
                  clickHandle(e.target.getAttribute("data"));
                }}
                className="w-[100px] h-[100px] bg-green-500"
              />
              <section
                data="#FFFF00"
                onClick={(e) => {
                  clickHandle(e.target.getAttribute("data"));
                }}
                className="w-[100px] h-[100px] bg-yellow-500"
              />
              </div>
              
            </div>
          </Suspense>
      </div>

      <input
        type="color"
        value={"0x000000"}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default App;
