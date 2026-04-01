import React from "react";

export default function Footer() {
	return (
		<footer className="w-full border-t border-white/20 bg-black py-8 px-4 mt-12">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
				<span className="text-gray-300 text-sm">© 2026 FACT CLUB ALL RIGHTS RESERVED.</span>
				<div className="flex items-center gap-6 text-sm">
					<a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a>
					<a href="#" className="text-gray-300 hover:text-white transition-colors">Research Lab</a>
					<a href="#" className="text-gray-300 hover:text-white transition-colors">Forensic Reports</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
				</div>
			</div>
		</footer>
	);
}
