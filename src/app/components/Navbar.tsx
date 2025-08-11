"use client"

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About Us', href: '#about' },
	{ name: 'Products', href: '#products' },
	{ name: 'Directors', href: '/directors' },
	{ name: 'Contact Us', href: '/contact' },
];


export default function Navbar() {
	const [open, setOpen] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		const updateNavbar = () => {
			if (navRef.current) {
				const isMobile = window.innerWidth < 768;
				gsap.fromTo(
					navRef.current,
					{ 
						y: -80, 
						opacity: 0, 
						scale: isMobile ? 0.95 : 0.8, 
						rotate: isMobile ? 0 : -8 
					},
					{
						y: 0,
						opacity: 1,
						scale: 1,
						rotate: 0,
						duration: isMobile ? 0.8 : 1.2,
						ease: 'elastic.out(1, 0.7)',
					}
				);

				gsap.to(navRef.current, {
					boxShadow: '0 24px 48px 0 rgba(46,125,50,0.22)',
					scale: isMobile ? 1 : 1.04,
					duration: 0.7,
					scrollTrigger: {
						trigger: navRef.current,
						start: 'top top',
						end: '+=200',
						scrub: true,
					},
				});
			}
		};

		updateNavbar();
		window.addEventListener('resize', updateNavbar);
		return () => window.removeEventListener('resize', updateNavbar);
	}, []);

	return (
		<nav
			ref={navRef}
			className="navbar sticky top-2 xs:top-3 sm:top-4 left-0 right-0 mx-auto flex items-center justify-between px-3 xs:px-5 sm:px-12 py-2 xs:py-3 sm:py-6 w-full max-w-full sm:max-w-[1100px] md:max-w-[1300px] lg:max-w-[1600px] rounded-full shadow-2xl bg-white/70 backdrop-blur-2xl border border-white/40 z-50"
			style={{
				position: 'sticky',
				top: '0.5rem',
				left: 0,
				right: 0,
				marginLeft: 'auto',
				marginRight: 'auto',
				width: '100%',
				maxWidth: '1000px',
				borderRadius: '9999px',
				boxShadow: '0 12px 36px 0 rgba(46,125,50,0.18)',
				background: 'rgba(255,255,255,0.70)',
				backdropFilter: 'blur(24px)',
				border: '1.5px solid rgba(255,255,255,0.4)',
				zIndex: 50,
				willChange: 'transform, box-shadow',
			}}
		>
			<div className="flex items-center gap-2 xs:gap-3 sm:gap-5">
				<Image src="/logo.png" alt="PPL Biotech Logo" width={40} height={40} className="navbar-logo w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 rounded-full object-cover object-center border-2 border-primary/30" />
				<span className="font-bold text-base xs:text-lg sm:text-xl md:text-lg lg:text-base navbar-logo text-primary">PPL Biotech</span>
			</div>
				{/* Desktop Menu */}
				<ul className="hidden sm:flex list-none m-0 p-0 navbar-menu">
					{menuItems.map(item => (
						<li key={item.name} className="ml-4 sm:ml-8 md:ml-12">
							<a href={item.href} className="px-4 py-2 rounded-full text-primary hover:text-accent font-medium transition-colors hover:bg-primary/10 text-base sm:text-lg md:text-base lg:text-sm">
								{item.name}
							</a>
						</li>
					))}
				</ul>
				{/* Mobile Menu Button */}
				<button
					className="sm:hidden ml-auto p-2 xs:p-3 rounded-full bg-white/80 border border-white/40 shadow-lg"
					aria-label="Open menu"
					onClick={() => setOpen(!open)}
				>
					<svg width="24" height="24" fill="none" stroke="#2e7d32" strokeWidth="2" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
					</svg>
				</button>
				{/* Mobile Menu */}
				{open && (
					<ul className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl rounded-b-full shadow-2xl flex flex-col items-center py-2 xs:py-3 z-50 animate-fade-in">
						{menuItems.map(item => (
							<li key={item.name} className="w-full">
								<a
										href={item.href}
										className="block px-4 py-3 rounded-full text-primary hover:text-accent font-medium transition-colors text-center hover:bg-primary/10 text-base xs:text-lg"
										onClick={() => setOpen(false)}
									>
										{item.name}
									</a>
							</li>
						))}
					</ul>
				)}
			<style jsx>{`
				.animate-fade-in {
					animation: fadeInMenu 0.3s ease;
				}
				@keyframes fadeInMenu {
					from { opacity: 0; transform: translateY(-10px); }
					to { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</nav>
	);
}
