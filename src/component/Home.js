import React,{useEffect,useState} from 'react'
import {useHistory, Link } from 'react-router-dom';
import './Home.css'
import productData from '../productData.json'
import {connect} from 'react-redux'

function HomePage({updatedData}){
    const [data,setData] = useState([])
    const history = useHistory();
    useEffect(() => {
      setData(productData)
  
    }, [data])

    return(
        <table>
             <tr>
                <th>Product Name</th>
                <th>weight</th>
                <th>Availability</th>
                <th>isEditable</th>
            </tr>
          
            {data.map((prdct,index)=>(
              <tr>
                  <td>{updatedData?.name ?? prdct.product_name}</td>
                  <td>{updatedData?.weight ??prdct.weight}</td>
                  <td>{updatedData?.availability ??prdct.availability}</td>
                  <td>
                    {updatedData?.isEditable ?? prdct.isEditable? 
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
      updatedData: state.product.updatedData
  }
}
export default connect(mapStateToProps)(HomePage)
