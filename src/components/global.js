
function GlobalStats(props){
    console.log(props);
    return(
        <div>
            <h1>Covid-19 Tracker</h1>

            <div className="globalstats">
                <div>
                <small>Total death</small>
                    <h2>{props.global.TotalDeaths}</h2>
                 
                </div>



                <div>
                <small>New cases</small>
                    <h2>{props.global.TotalConfirmed - props.global.TotalDeaths }</h2>
                 
                </div>

                <div>
                    <small>Total recovery</small>
                    <h2>{props.global.TotalRecovered}</h2>
                 
                </div>
            </div>
        </div>
    )
}

export default GlobalStats;