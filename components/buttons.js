import { Button } from './button';
import API from '@/public/icons/APImdpi.png';
import Excpnt from '@/public/icons/Excpientmdpi.png';
import Personnel from '@/public/icons/Personnelmdpi.png';
import PPM from '@/public/icons/PPMmdpi.png';
import SPM from '@/public/icons/SPMmdpi.png';

export const Buttons = () => {
    return (
        <div className="kabi-movement-buttons--wrapper absolute h-screen flex flex-col justify-center top-0 right-0 pr-32">
            <Button text="Personel Improvement" icon={Personnel} video="/videos/personnel.mp4" />
            <Button text="Excipient" icon={Excpnt} video="/videos/excipient.mp4" />
            <Button text="API" icon={API} video="/videos/api.mp4" />
            <Button text="Primary Packaging Material" icon={PPM} video="/videos/ppm.mp4" />
            <Button text="Secondary Packaging Material" icon={SPM} video="/videos/spm.mp4" />
        </div>
    )
}