import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import PropTypes from 'prop-types';
import { MainForm, BtnForm } from './ContactForm.styled';


const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
    })
    
const initialValues = {
        name: '',
        number: '',
    }    
        
export const ContactForm = ({onSubmit}) => { 
    return <Formik initialValues={initialValues} validationSchema={schema}>
        <MainForm autoComplete='off' onSubmit={onSubmit}>
          <label htmlFor='name'>Name
            <Field type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required/>
          </label>
          <ErrorMessage name="name" component='div' />
          <br />
          <label htmlFor='number'>Number
                <Field type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required/>
          </label>
            <ErrorMessage name="number" component='div'/>
          <BtnForm type="submit">Add contact</BtnForm>
        </MainForm>
      </Formik>
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
