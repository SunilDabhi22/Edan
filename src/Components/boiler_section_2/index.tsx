import './index.css'

export default function BoilerSection(props: any) {

    const Iconbox1 = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1205 1205">
                <defs></defs>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <circle className="cls-1" cx="602.5" cy="602.5" r="592.5" />
                        <path className="cls-2" d="M850.5,829a20.06,20.06,0,0,1-20,20h-559c-11,0-13.64-6.36-5.86-14.14L836.36,264.14c7.78-7.78,14.14-5.14,14.14,5.86Z" />
                    </g>
                </g>
            </svg>
        )
    }

    const Iconbox2 = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1205 1205"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle className="cls-1" cx="602.5" cy="602.5" r="592.5" /><line className="cls-1" x1="247.55" y1="603" x2="957.36" y2="603" /><line className="cls-2" x1="417.66" y1="696" x2="417.66" y2="716" /><line className="cls-3" x1="417.66" y1="754.98" x2="417.66" y2="969.36" /><line className="cls-2" x1="417.66" y1="988.85" x2="417.66" y2="1008.85" /><line className="cls-2" x1="602.58" y1="696" x2="602.58" y2="716" /><line className="cls-3" x1="602.58" y1="754.98" x2="602.58" y2="969.36" /><line className="cls-2" x1="602.58" y1="988.85" x2="602.58" y2="1008.85" /><line className="cls-2" x1="787.5" y1="696" x2="787.5" y2="716" /><line className="cls-3" x1="787.5" y1="754.98" x2="787.5" y2="969.36" /><line className="cls-2" x1="787.5" y1="988.85" x2="787.5" y2="1008.85" /><line className="cls-1" x1="370.13" y1="277.05" x2="482.18" y2="505.66" /><line className="cls-1" x1="311.85" y1="447.38" x2="540.46" y2="335.33" /><line className="cls-1" x1="612.8" y1="201.28" x2="877.09" y2="505.85" /><line className="cls-1" x1="592.66" y1="485.71" x2="897.23" y2="221.42" /></g></g></svg>
        )
    }

    const Iconbox3 = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1205 1205"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle className="cls-1" cx="602.5" cy="602.5" r="592.5" /><path className="cls-2" d="M602.5,294.86,278.85,375.71S252.59,826.61,602.5,980.77" /><path className="cls-2" d="M602.5,294.86l323.65,80.85s26.26,450.9-323.65,605.06" /></g></g></svg>
        )
    }

    const Iconbox4 = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1205 1205"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle className="cls-1" cx="602.5" cy="602.5" r="592.5" /><rect className="cls-2" x="290.44" y="371.86" width="623" height="461" rx="38.21" /><line className="cls-2" x1="402.44" y1="486.86" x2="800.44" y2="486.86" /><polyline className="cls-2" points="419.34 718.85 491.67 646.52 563.99 718.85" /><polyline className="cls-2" points="780.54 646.52 708.22 718.85 635.89 646.52" /></g></g></svg>
        )
    }

    return (
        <div className='boiler-details'>
            <div className='detail-container'>
                <div className='detail-col'>
                    <div className='left-detail-sec'>
                        <h4>Fuss-free <br />fixed prices</h4>
                        <p className='tagline'>Everything your new boiler needs, we include.</p>
                        <div className='icon-box'>
                            <Iconbox1 />
                            <div className='icon-detail'>
                                <h5>Gas Safe Installation</h5>
                                <p>Completed by a local, skilled engineer.</p>
                            </div>
                        </div>
                        <div className='icon-box'>
                            <Iconbox2 />
                            <div className='icon-detail'>
                                <h5>System Cleanse & Filter</h5>
                                <p>To keep your new boiler running great for longer</p>
                            </div>
                        </div>
                        <div className='icon-box'>
                            <Iconbox3 />
                            <div className='icon-detail'>
                                <h5>Warranty Protection</h5>
                                <p>On both the product and the installation</p>
                            </div>
                        </div>
                        <div className='icon-box'>
                            <Iconbox4 />
                            <div className='icon-detail'>
                                <h5>Upgraded Controls</h5>
                                <p>On new combi boiler installations*</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='detail-col'>
                    <div className='right-img-sec'>
                        <img src='https://picsum.photos/800/1000' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}