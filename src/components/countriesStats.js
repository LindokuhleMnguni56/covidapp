

function CountriesStats(props){
    return(
        <div>
            <table>
                <tr>
                    <th>Country name</th>
                    <th> Total Confirmed</th>
                    <th>Active cases</th>
                </tr>

                {props.countries.map((country)=>(
                   <tr>
                     <td>{country.Country}</td>
                     <td>{country.TotalConfirmed}</td>
                     <td>{country.NewConfirmed}</td>
                   </tr> 
                ))}
            </table>
        </div>
    )
}

export default CountriesStats