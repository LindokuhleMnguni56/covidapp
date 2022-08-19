
function Search(props){
    
    const textField = {
        width: '1400px' ,
        height: '30px' ,
        marginTop: '3' ,
        marginLeft: '10%' 

    }

        const searchCountry = ((e)=>{
        PaymentResponse.search(e.target.value)
    })


    return(
        <div>

            <input type="text" placeholder="Search a country" style={textField} onChange= {(e)=> searchCountry(e)} />

        </div>

    )
}

export default Search;