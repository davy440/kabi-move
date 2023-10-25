import { useContext } from 'react';
import Image from 'next/image';
import { videoContext } from './player';

export const Button = ({text, icon = "", video}) => {
    
    const updateVideo = useContext(videoContext);

    return (
        <button
            type="button"
            className={`py-3 px-5 flex items-start text-left text-white bg-navy rounded-lg self-end w-72 mt-6 first:mt-0 font-bold`}
            onClick={() => updateVideo(video)}
        >
            <span className="mr-2">
                <Image
                    src={icon.src}
                    width={24}
                    height={24}
                    alt="API"
                />
            </span>
            {text}
        </button>
    )
    
}