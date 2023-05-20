import React from 'react'

const List = ({ data }) => {
    return (
        <div className='List'>
            <table>
                <thead>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Current Price</th>
                        <th>Total Vol.</th>
                        <th>Day Change</th>
                        <th>Market Cap.</th>
                        
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (<tr key={item.id} >
                            <td><img src={item.image} alt="icon" /></td>
                            <td>{item.name}</td>
                            <td>{item.symbol.toUpperCase()}</td>
                            <td>{item.current_price}</td>
                            <td>{item.total_volume}</td>
                            <td className={(item.ath_change_percentage>0)?"up":"down"}>{item.ath_change_percentage.toFixed(2)}</td>
                            <td>${item.market_cap}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default List