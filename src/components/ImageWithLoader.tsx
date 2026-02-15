import { useState } from "react";
import "../styles/components/ImageLoader.css";

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    wrapperClassName?: string;
}

// Show spinner untill images load
export function ImageWithLoader({ wrapperClassName, className, alt, onLoad, ...props }: ImageWithLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsLoading(false);
        if (onLoad) {
            onLoad(e);
        }
    };

    return (
        <div className={`image-loader-container ${wrapperClassName || ""}`.trim()}>
            {isLoading && <div className="image-loader-spinner" />}
            <img
                loading="lazy"
                alt={alt}
                className={`image-content ${!isLoading ? "loaded" : ""} ${className || ""}`.trim()}
                onLoad={handleLoad}
                {...props}
            />
        </div>
    );
}
