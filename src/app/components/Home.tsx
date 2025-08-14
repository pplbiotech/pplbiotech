"use client"
import React from 'react';
import Head from 'next/head';

export default function Home() {
		return (
			<>
				<Head>
					<title>PPL Biotech - High-Quality Allopathic and Ayurvedic Medicines</title>
					<meta name="description" content="PPL Biotech, under Pumithila Pvt. Ltd., delivers high-quality Allopathic and Ayurvedic medicines to ensure accessible healthcare for all." />
					<meta name="keywords" content="PPL Biotech, Pumithila Pvt. Ltd., Allopathic medicines, Ayurvedic medicines, healthcare solutions, pharmaceutical company, accessible healthcare" />
					<meta name="author" content="PPL Biotech" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta property="og:title" content="PPL Biotech - High-Quality Allopathic and Ayurvedic Medicines" />
					<meta property="og:description" content="PPL Biotech, under Pumithila Pvt. Ltd., delivers high-quality Allopathic and Ayurvedic medicines to ensure accessible healthcare for all." />
					<meta property="og:image" content="/logo.png" />
					<meta property="og:url" content="https://www.pplbiotech.com" />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<section className="relative flex flex-col items-center justify-center min-h-screen px-0 pt-2 pb-8 md:pt-4 md:pb-12 animate-fade-in section-divider w-full overflow-hidden">
				{/* Animated Logo */}
						<div className="mb-4 flex items-center justify-center w-full animate-bounce-in">
							<img src="/logo.png" alt="PPL Biotech Logo" className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg border-4 border-primary mx-auto" />
						</div>
				{/* Tagline */}
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-primary text-center drop-shadow-lg animate-slide-down w-full">
							Welcome to PPL Biotech
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 text-center w-full text-accent font-semibold animate-fade-in delay-200">
							"Empowering Health, Enriching Lives"
						</p>
						<p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 text-center w-full text-primary/90 animate-fade-in delay-200">
							Pumithila Pvt. Ltd., under the brand name <span className="font-bold text-accent">PPL Biotech</span>, is committed to delivering high-quality Allopathic and Ayurvedic medicines to every corner of society, ensuring that no one is left behind.
						</p>
						{/* Animated Quick Stats */}
								<div className="flex flex-row gap-6 md:gap-12 mb-8 justify-center w-full">
									<AnimatedStat value={10} label="Years Experience" />
									<AnimatedStat value={1000} label="Happy Clients" />
								</div>
				{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mt-2 animate-bounce-in w-full justify-center">
							<a
								href="#products"
								onClick={e => {
									e.preventDefault();
									document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
								}}
								className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-primary text-white font-bold shadow-lg hover:bg-accent hover:text-primary transition-all duration-200 scale-100 hover:scale-105 border-2 border-primary hover:border-accent text-center w-full sm:w-auto cursor-pointer"
							>
								🌿 Explore Products
							</a>
							<button
								onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
								className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-black text-white font-bold shadow-lg hover:bg-gray-800 hover:text-white transition-all duration-200 scale-100 hover:scale-105 border-2 border-black hover:border-gray-800 text-center w-full sm:w-auto"
							>
								📞 Contact Us
							</button>
						</div>
								{/* Animated Ocean Waves SVG Background */}
								<div className="fixed inset-x-0 bottom-0 z-[-1] overflow-hidden">
									<svg 
										style={{
											width: '100%',
											height: '320px',
											display: 'block',
											maxWidth: '100%',
											margin: '0 auto'
										}} 
										className="animate-wave" 
										viewBox="0 0 1440 320" 
										fill="none" 
										xmlns="http://www.w3.org/2000/svg"
										preserveAspectRatio="none"
									>
										<path fill="#fbc02d" fillOpacity="0.18" d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z" />
										<path fill="#60ad5e" fillOpacity="0.14" d="M0,240 C480,320 960,0 1440,240 L1440,320 L0,320 Z" />
									</svg>
								</div>
								<style jsx>{`
									.animate-wave {
										animation: waveMove 8s linear infinite alternate;
									}
									@keyframes waveMove {
										0% { transform: translateY(0); }
										100% { transform: translateY(-24px); }
									}
									@media (max-width: 640px) {
										.animate-wave {
											animation: waveMoveMobile 6s linear infinite alternate;
										}
										@keyframes waveMoveMobile {
											0% { transform: translateY(0); }
											100% { transform: translateY(-12px); }
										}
									}
									.animate-fade-in {
										animation: fadeIn 1.2s ease;
									}
									.animate-slide-down {
										animation: slideDown 1s cubic-bezier(.42,0,.58,1);
									}
									.animate-bounce-in {
										animation: bounceIn 0.8s cubic-bezier(.42,0,.58,1);
									}
									@keyframes fadeIn {
										from { opacity: 0; }
										to { opacity: 1; }
									}
									@keyframes slideDown {
										from { transform: translateY(-40px); opacity: 0; }
										to { transform: translateY(0); opacity: 1; }
									}
									@keyframes bounceIn {
										0% { transform: scale(0.8); opacity: 0; }
										60% { transform: scale(1.05); opacity: 1; }
										100% { transform: scale(1); }
									}
								`}</style>
						{/* Animations using Tailwind CSS custom classes */}
						<style jsx>{`
							.animate-fade-in {
								animation: fadeIn 1.2s ease;
							}
							.animate-slide-down {
								animation: slideDown 1s cubic-bezier(.42,0,.58,1);
							}
							.animate-bounce-in {
								animation: bounceIn 0.8s cubic-bezier(.42,0,.58,1);
							}
							@keyframes fadeIn {
								from { opacity: 0; }
								to { opacity: 1; }
							}
							@keyframes slideDown {
								from { transform: translateY(-40px); opacity: 0; }
								to { transform: translateY(0); opacity: 1; }
							}
							@keyframes bounceIn {
								0% { transform: scale(0.8); opacity: 0; }
								60% { transform: scale(1.05); opacity: 1; }
								100% { transform: scale(1); }
							}
						`}</style>
					</section>
				</>
				);
// AnimatedStat component
function AnimatedStat({ value, label }: { value: number; label: string }) {
	const [count, setCount] = React.useState(0);
	React.useEffect(() => {
		let start = 0;
		const end = value;
		if (start === end) return;
		let duration = 1200;
		let increment = end / (duration / 16);
		let current = start;
		const timer = setInterval(() => {
			current += increment;
			if (current >= end) {
				current = end;
				clearInterval(timer);
			}
			setCount(Math.floor(current));
		}, 16);
		return () => clearInterval(timer);
	}, [value]);
	return (
		<div className="flex flex-col items-center">
			<span className="text-2xl md:text-3xl font-extrabold text-primary">{count}+</span>
			<span className="text-sm md:text-base text-gray-600">{label}</span>
		</div>
	);
}
}
