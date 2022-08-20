

function CountriesStats(props) {
    return (
        <div>

            <table>
                <tr>
                    <th>Country name</th>

                    <th>Active cases</th>
                </tr>

                {props.countries.map((country) => (
                <tr>
                    <td>{country.Country}</td>
                    <td>{country.TotalConfirmed}</td>
                    <td>{country.NewConfirmed}</td>
                </tr>
            ))}
            </table>


            {/* <table>
                <tr>
                    <th>Country Name</th>
                    <th>Active cases</th>
                </tr>

                {props.countries.map((country)=>(
                    <tr>
                        <th>{country.Country}</th>
                    </tr>
                ))}
            </table> */}
        </div>
    )
}

export default CountriesStats





