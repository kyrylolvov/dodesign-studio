import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import emailjs from '@emailjs/browser';

import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

import {
  FormButtonContainer, FormContainer, FormSubTitle, FormTitle,
} from '../styles/contact';

import {
  PageContent, PageContainer, PageTitle, PageContentHalf, PageParagraph, PageExternalLink,
} from '../styles/css';

import { ContactPaths } from '../utils/routes';

const Contact: NextPage = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
    phone: '',
  };

  const validationSchema = yup.object({
    name: yup.string().required('This field is required.'),
    email: yup.string().required('This field is required.').email('Please enter a valid email address.'),
    message: yup.string().required('This field is required.'),
    phone: yup.string(),
  });

  return (
    <PageContainer>
      <Head>
        <title>Contact - - DoDesign</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PageContent>
        <PageTitle>Contact</PageTitle>
        <PageContentHalf style={{ marginTop: '64px' }}>
          <PageParagraph>
            If you want to order a project or have any questions, please contact us by email and phone.
            {'\n\n'}
            <Link href={ContactPaths.email}>
              <PageExternalLink>mail@dodesign.com</PageExternalLink>
            </Link>
            {'\n\n'}
            Canada, Toronto:
            {'\n'}
            <Link href={ContactPaths.phone}>
              <PageExternalLink>+1 437 345 2001</PageExternalLink>
            </Link>
          </PageParagraph>
          <FormContainer>
            <FormTitle>Feedback Form</FormTitle>
            <FormSubTitle>* Required fields</FormSubTitle>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                emailjs.send('service_1nngi94', 'template_oai0932', values, 'nHJAuPWVKtfYFq7fQ');
                resetForm();
              }}
            >
              {({
                values, errors, touched, handleChange,
              }) => (
                <Form autoComplete="off">
                  <Input
                    touched={touched.name}
                    error={errors.name}
                    handleChange={handleChange}
                    name="name"
                    type="text"
                    value={values.name}
                    label="Name *"
                    placeholder="Enter your name"
                  />
                  <Input
                    touched={touched.email}
                    error={errors.email}
                    handleChange={handleChange}
                    name="email"
                    type="text"
                    value={values.email}
                    label="Email *"
                    placeholder="Enter your email"
                  />
                  <Input
                    touched={touched.phone}
                    error={errors.phone}
                    handleChange={handleChange}
                    name="phone"
                    type="number"
                    value={values.phone}
                    label="Phone"
                    placeholder="Enter your phone"
                  />
                  <Input
                    touched={touched.message}
                    error={errors.message}
                    handleChange={handleChange}
                    name="message"
                    type="textarea"
                    value={values.message}
                    label="Message *"
                    placeholder="Enter your message"
                  />
                  <FormButtonContainer>
                    <Button type="submit" style={{ marginTop: '36px' }} text="Submit" />
                  </FormButtonContainer>
                </Form>
              )}
            </Formik>
          </FormContainer>
        </PageContentHalf>
      </PageContent>
    </PageContainer>
  );
};

export default Contact;
