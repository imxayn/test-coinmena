import React from 'react'
import { Form, Field } from 'react-final-form'
import {useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux'
import {editData} from '../store/productAction'
import { useSelector, useDispatch } from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
      margin:16,
      padding:16
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
function EditProduct({data,editData}){
    const history = useHistory();
    const classes = useStyles();
    const onSubmit = async (values) => {
      editData(values)
      history.push('/')
      };
      const required = value => (value ? undefined : 'Required')

    return(
        <div className={classes.root}>
         <Form
         classeName={classes.root}
         onSubmit={onSubmit}
         render={({ handleSubmit,form, submitting, pristine, values }) => (
         <form onSubmit={handleSubmit}>
             <div>
                  <Field name="name" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <label>Name</label>
                        <input {...input} type="text" placeholder="Name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
                )}
          </Field>
             </div>
             <br />
             <div>
             <Field name="availability" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <label>Availability</label>
                        <input {...input} type="text" placeholder="availability" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
                )}
          </Field>
             </div>
             <br />

             <div>
                 <label>Weight</label>
                 <Field name="weight" component="input" placeholder="Weight" type="text" />
             </div>

             <br />
             <div>
                 <label>Product Url</label>
                 <Field name="productUrl" component="input" placeholder="Product Url" type="text" />
             </div>
             
             <div>

             <br />
               
             <label>Price Tier</label>
             <label>
                <Field
                  name="priceTier"
                  component="input"
                  type="radio"
                  value="budget"
                />{' '}
                budget
              </label>
              <label>
                <Field
                  name="priceTier"
                  component="input"
                  type="radio"
                  value="premier"
                />{' '}
                premier
              </label>

             </div>

             <br />

             <div>
            <label>Price Range</label>
            <Field name="priceRange" component="select">
              <option value="$1-10">$1-10</option>
              <option value="$11-20">$11-20</option>
              <option value="$21-30">$21-30</option>
            </Field>
          </div>

          <br />
             <div>
                 <label>Is Editable</label>
                 <Field name="isEditable" component="input" placeholder="Is Editable" type="checkbox" />
             </div>
             <br />
             <button type="submit">Submit</button>
         </form>
         )}
        
     />
    </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({editData}, dispatch)
export default connect(null,mapDispatchToProps)(EditProduct)