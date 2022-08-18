
function GlobalStats(props){
    return(
        <div>
            <h1>Covid-19 Tracker</h1>

            <div className="globalstats">
                <div>
                    <h2>{props.global.TotalDeaths}</h2>
                 <small>Total death</small>
                </div>

                <div>
                    <h2>{props.global.NewConfirmed - props.global.TotalDeaths }</h2>
                 <small>New cases</small>
                </div>

                <div>
                    <h2>{props.global.TotalDeaths}</h2>
                 <small>Total recovery</small>
                </div>
            </div>
        </div>
    )
}

export default GlobalStats;