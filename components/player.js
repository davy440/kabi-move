import { useState, createContext } from 'react';
import CloseIcon from '/public/close.svg';
import Image from 'next/image';
import { Buttons } from './buttons';
import { Video } from './video';

export const videoContext = createContext();

export const Player = ({ setStart }) => {
    const [video, playVideo] = useState("");
    console.log(video);
    return (
        <> 
            <div
                className="kabi-movement-buttons-container absolute h-screen w-screen"
                >
                    <button
                    type="button"
                    className="close absolute right-16 top-8 z-10"
                    onClick={() => {
                        {video !== "" &&
                            playVideo("")
                        }

                        {video === "" &&
                            setStart(false)}
                        }
                    }
                    >
                    <Image
                        src={CloseIcon}
                        width={32}
                        height={32}
                        alt="Close Icon"
                    />
                </button>

                {video !== "" &&
                    <Video video={video} />
                }
                
                {video === "" &&
                <videoContext.Provider value={playVideo}>
                    <Buttons />
                </videoContext.Provider>
                }
                
            </div>
        </>
    )
}