'use client';
import React, { useState } from 'react';
import { PageHero } from '@/components/page-hero';

const Gallery: React.FC = () => {
    const images = [
        { src: 'https://picsum.photos/seed/g1/800/600', alt: 'Description image 1' },
        { src: 'https://picsum.photos/seed/g2/600/800', alt: 'Description image 2' },
        { src: 'https://picsum.photos/seed/g3/800/800', alt: 'Description image 3' },
        { src: 'https://picsum.photos/seed/g4/800/600', alt: 'Description image 4' },
        { src: 'https://picsum.photos/seed/g5/600/800', alt: 'Description image 5' },
        { src: 'https://picsum.photos/seed/g6/800/600', alt: 'Description image 6' },
        { src: 'https://picsum.photos/seed/g7/800/600', alt: 'Description image 7' },
        { src: 'https://picsum.photos/seed/g8/800/1000', alt: 'Description image 8' },
        { src: 'https://picsum.photos/seed/g9/800/600', alt: 'Description image 9' },
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div>
            <PageHero title="Notre Galerie Photo et Vidéo" subtitle="Revivez les moments forts de l'U.A.E.C.G." />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                    {images.map((image, index) => (
                        <div key={index} data-aos="zoom-in" data-aos-delay={50 * index} className="mb-4 break-inside-avoid" onClick={() => setSelectedImage(image.src)}>
                            <img src={image.src} alt={image.alt} className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer" />
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                    <div className="relative p-4 animate-zoom-in">
                        <img src={selectedImage} alt="Selected" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl" />
                        <button onClick={() => setSelectedImage(null)} className="absolute -top-4 -right-4 text-white bg-primary-blue rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">&times;</button>
                    </div>
                     <style>{`
                        @keyframes zoom-in {
                            from { transform: scale(0.8); opacity: 0; }
                            to { transform: scale(1); opacity: 1; }
                        }
                        .animate-zoom-in { animation: zoom-in 0.3s ease-out forwards; }
                    `}</style>
                </div>
            )}
        </div>
    );
};

export default Gallery;
