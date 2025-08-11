

import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>PPL BIOTECH</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className="antialiased relative min-h-screen overflow-x-hidden">
        {/* Animated Blob Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="blob1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientTransform="rotate(45)">
                <stop offset="0%" stopColor="#60ad5e" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#fbc02d" stopOpacity="0.15" />
              </radialGradient>
              <radialGradient id="blob2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientTransform="rotate(-30)">
                <stop offset="0%" stopColor="#2e7d32" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#fff263" stopOpacity="0.10" />
              </radialGradient>
            </defs>
            <g>
              <ellipse cx="600" cy="400" rx="420" ry="320" fill="url(#blob1)">
                <animate attributeName="rx" values="420;440;420" dur="8s" repeatCount="indefinite" />
                <animate attributeName="ry" values="320;340;320" dur="8s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="1100" cy="700" rx="260" ry="180" fill="url(#blob2)">
                <animate attributeName="rx" values="260;280;260" dur="7s" repeatCount="indefinite" />
                <animate attributeName="ry" values="180;200;180" dur="7s" repeatCount="indefinite" />
              </ellipse>
              <ellipse cx="300" cy="700" rx="180" ry="120" fill="url(#blob2)">
                <animate attributeName="rx" values="180;200;180" dur="6s" repeatCount="indefinite" />
                <animate attributeName="ry" values="120;140;120" dur="6s" repeatCount="indefinite" />
              </ellipse>
            </g>
          </svg>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
