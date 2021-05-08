import style from "./LearnWithVideo.module.css";

function LearnWithVideo() {
    return(
        <div>
            <div className="container">
                <div className="text-center mt-4 mb-5">
                    <h4 classNmae={style.wkHeadingText}>যে ভাবে কাজ করে </h4>
                </div>
                <div className={style.wkVideoSectionArea} style={{ backgroundImage: 'url(../../../static/img/video/vid.jpg)'}}>

                    <div className={style.wkVideoIconArea}>
                        <iframe style={{ position: 'absolute', top: '0' ,left: '0'}}
                                src="https://www.youtube.com/embed/xXl1srHFKqI?autoplay=1&showinfo=0&loop=1&mute=1&controls=0&playlist=xXl1srHFKqI&amp;showinfo=0"
                                width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen
                                allowFullScreen></iframe>
                        <div className={style.wkIconItem}>
                            <span style={{ position: "absolute", top:'50%', left:'50%', transform: 'translate(-50%, -50%)' }}>
                                <a target="_blank" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutu.be%2FxXl1srHFKqI%3Ffbclid%3DIwAR1zlbJMRUZBUHFTckP8UCpAKhy2nCbsqpGOT-WV5jZ2TXPGPM6MSjk0D1c&h=AT1Kr1FtPGitX_CyqCp2mb4p34Xfoz59J6w4PJgW0Yso0mQKsajcV-U3YD2Je_uwMyf04GE2hjeg2a4xnDzqNXq33iVweBfBwIT6MDetaG8uQYxvqgAq_XcyswY_LCqkVDyl-Q">

                                    <span class="material-icons" style={{ fontSize:'60px', color:'#fff', cursor: 'pointer' }}>play_arrow</span>
                                </a>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnWithVideo;