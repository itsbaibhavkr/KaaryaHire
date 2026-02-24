"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/hero_slide_1.png",
    "/hero_slide_2.png",
    "/hero_slide_3.png",
];

export default function HeroBackgroundSlider() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // 5 seconds per slide

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Hero Background ${index + 1}`}
                        fill
                        className="object-cover object-center"
                        priority={index === 0}
                        quality={75}
                    />
                </div>
            ))}
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        </div>
    );
}
