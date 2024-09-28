// import { Link, routes } from '@redwoodjs/router'
import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <Label  name='name'>Name</Label>
        <TextField
          name="name"
          placeholder="Your name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />
        <br />
        <Label name='email' >Email</Label>
        <TextField
          name="email"
          placeholder="Your email"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="error" />
        <br />
        <Label name='message' >Message</Label>
        <TextAreaField
          name="message"
          placeholder="Your message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="rw-label-error rw-label" />
        <Submit>Send</Submit>
      </Form>
    </>
  )
}

export default ContactPage
