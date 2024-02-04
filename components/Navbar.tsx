

export default function Navbar() {
    return (

    <div className="bg-navbar ">
        <nav>
            <div className="fancyFont animate-pulse animate-delay-[3000ms] animate-duration-[5000ms] pl-2">
            <a  href="heatmarie.com" style={ {
                color: 'white',
                fontSize: '2em',
                fontFamily: 'Rage Italic',
                background: '-webkit-linear-gradient(#eee, #333)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center',
                backgroundColor: 'black',
                }} >
                    HeatMarie
            </a>
            <button></button>
            </div>
        </nav>
    </div>
    )
}