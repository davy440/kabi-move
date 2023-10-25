import { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import map from '@/public/map.png';
import { Player } from '@/components/player';

const inter = Inter({ subsets: ['latin'] })

export const videos = ['/api.mp4', '/excipient.mp4', '/personnel.mp4', 'ppm.mp4', 'spm.mp4']

export default function Home() {
  const [ start, setStart ] = useState(false);

  return (
    <main
      className={`flex h-screen w-screen ${inter.className}`}
    >
      <Image
        className="w-auto mx-auto cursor-pointer"
        src={map}
        alt="Fresenius Kabi"
        onClick={() => setStart(true)}
      />

      {start === true &&
        <Player setStart={setStart} />
      }
    </main>
  )
}
