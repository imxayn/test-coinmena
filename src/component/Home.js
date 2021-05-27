import React,{useEffect,useState} from 'react'
import {useHistory, Link } from 'react-router-dom';
import './Home.css'
import {connect} from 'react-redux'

function HomePage({updatedData}){
    const [data,setData] = useState([])
    const history = useHistory();
    useEffect(() => {
      setData(updatedData)
  
    }, [updatedData])

    return(
        <table>
             <tr>
                <th>Product Name</th>
                <th>weight</th>
                <th>Availability</th>
                <th>isEditable</th>
            </tr>
          
            {data.length>0 && data?.map((prdct,index)=>(
              <tr>
                  <td>{prdct?.product_name}</td>
                  <td>{prdct?.weight}</td>
                  <td>{prdct?.availability}</td>
                  <td>
                    {prdct?.isEditable? 
                     <Link to={`/edit-products/${prdct._id}`}>
                     <button onClick={()=>history.push(`/edit-products/:${prdct._id}`)}>
                      Edit</button>
                    </Link> : ''}
                 
                    
                      </td>
              </tr>
            )
            )}
        </table>
     
    )
}
const mapStateToProps = state => {
  return {
      updatedData: state.product.data
  }
}
export default connect(mapStateToProps)(HomePage)
