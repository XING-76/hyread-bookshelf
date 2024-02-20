import { useRef, useEffect, useState } from 'react';
import './style.scss';

interface Props {
    src: string;
    alt: string;
}

function LazyImage({ src, alt }: Props) {
    const imgRef = useRef<HTMLImageElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {});

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <div className="lazyImage__container">
            <img
                ref={imgRef}
                src={isVisible ? src : ''}
                alt={alt}
                className={`${isLoading ? 'lazyImage__loading' : ''}`}
                onLoad={() => {
                    setIsLoading(false);
                }}
            />
        </div>
    );
}

export default LazyImage;
