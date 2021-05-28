import React from 'react'
import { Form, Field } from 'react-final-form'
import {useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux'
import {editData} from '../store/productAction'


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
             <Field name="weight" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <label>Weight</label>
                        <input {...input} type="text" placeholder="eight" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
                )}
          </Field>
             </div>
             <br />

             <div>
                 <label>Availability</label>
                 <Field name="Availability" component="input" placeholder="availability" type="number" />
             </div>

             <br />

             <div>
             <Field name="productUrl" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <label>Product Url</label>
                        <input {...input} type="text" placeholder="Product Url" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
                )}
          </Field>
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
              {values.priceTier==='budget' ? (<>
                <option value="$1-10">$1-10</option>
              <option value="$11-20">$11-20</option>
              <option value="$21-30">$21-50</option></>)
              :(
                <>
                 <option value="$1-10">$50-99</option>
                 <option value="$11-20">$10-199</option>
                 <option value="$21-30">$200+</option>
                 </>
              )}
             
            </Field>
          </div>

          <br />

          <div>


          <Field name="isEditable" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <label>Is Editable</label>
                        <input {...input} type="checkbox"  placeholder="Is Editable" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
                )}
          </Field>
          </div>
          <br />
          <div>
          <button type="submit">Submit</button>
          </div>

            
         </form>
         )}
        
     />
    </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({editData}, dispatch)
export default connect(null,mapDispatchToProps)(EditProduct)