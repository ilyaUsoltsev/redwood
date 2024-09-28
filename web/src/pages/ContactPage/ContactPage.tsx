// import { Link, routes } from '@redwoodjs/router'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { Metadata, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast';

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {

  const [create, {loading, error}] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Message sent!');
      formMethods.reset();
    },
  });

  const formMethods = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
    create({ variables: { input: data } });
  }
  return (
    <>
      <Metadata title="Contact" description="Contact page" />
      <Toaster />

      <Form onSubmit={onSubmit} formMethods={formMethods} error={error}>
        <FormError error={error} wrapperClassName='text-red-500' />
        <Label  name='name'>Name</Label>
        <TextField
          name="name"
          placeholder="Your name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="text-red-500" />
        <br />
        <Label name='email' >Email</Label>
        <TextField
          name="email"
          placeholder="Your email"
          errorClassName="error"
          validation={{ required: true, pattern: /[^@]+@[^.]+\..+/ }}
        />
        <FieldError name="email" className="text-red-500" />
        <br />
        <Label name='message'  >Message</Label>
        <TextAreaField
          name="message"
          placeholder="Your message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="text-red-500" />
        <Submit disabled={loading}>Send</Submit>
      </Form>
    </>
  )
}

export default ContactPage
