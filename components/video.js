export const Video = ({ video }) => {
    return (
        <div className="kabi-movement-player absolute h-screen w-screen overflow-hidden">
            <video className="h-full mx-auto">
                <source src={video} type="video/mp4" />
                Your Browser does not support the video Tag.
            </video>
        </div>
    )
}