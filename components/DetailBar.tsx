import React from "react";
import { Car, Gauge, User } from "lucide-react";

export default function DetailBar() {
	return (
		<div className="h-1/5 px-6 bg-black rounded-md z-50 text-white border-b border-black shadow-lg">
			<div className="h-full flex items-center justify-between px-6">
				<div className="flex items-center space-x-4">
					<Car className="w-8 h-8" />
					<div>
						<h2 className="text-2xl font-bold tracking-tight">INS CHENNAI</h2>
						<p className="text-sm text-gray-300">DESTROYER CLASS</p>
					</div>
				</div>
				<div className="flex items-center space-x-4">
					<Gauge className="w-6 h-6" />
					<div>
						<p className="text-lg font-semibold">50 Nm/h</p>
						<p className="text-xs text-gray-300">Current Speed</p>
					</div>
				</div>
				<div className="flex items-center space-x-4">
					<User className="w-6 h-6" />
					<div>
						<p className="text-lg font-semibold">Occupied</p>
						<p className="text-xs text-gray-300">Current Status</p>
					</div>
				</div>
			</div>
		</div>
	);
}