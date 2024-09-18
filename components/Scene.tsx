"use client";
import {
	Html,
	OrbitControls,
	ScrollControls,
	useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";
import Sidebar from "./SideBar";
import Navbar from "./NavBar";
import DetailBar from "./DetailBar";

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
	return (
		<div className="h-screen">
		<div className="w-full h-24">
		<Navbar />
		</div>
			<div className="flex h-[87%]">
				<Sidebar />
				<div className="flex-col flex-1">
					<Canvas
						style={{
							display: "flex",
							alignItems: "center",
							width: "100%",
							height: "80%",
							border: "0.5rem solid gray",
							borderRadius: "1rem"
						}}
					>
						{/* Ambient Light for general illumination */}
						<ambientLight intensity={10} />

						{/* Directional Light for strong, directional illumination */}
						<directionalLight position={[5, 5, 5]} intensity={5} />

						{/* Point Light for localized, omnidirectional light */}
						<pointLight position={[-5, -5, -5]} intensity={5} />

						{/* Spot Light for focused, cone-shaped light */}
						<spotLight
							position={[10, 10, 10]}
							angle={0.3}
							penumbra={1}
							intensity={5}
							castShadow
						/>

						<Suspense fallback={<Loader />}>
							<ScrollControls damping={0.5} pages={1}>
								<Model />
								<OrbitControls dampingFactor={0.05} />
							</ScrollControls>
						</Suspense>
					</Canvas>
						<DetailBar/>
				</div>
			</div>
		</div>
	);
}
