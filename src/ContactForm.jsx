import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input, Paper, Button, TextField } from '@mui/material';
import './Footer.css';

function ContactForm() {
  const [state, handleSubmit] = useForm('xgvzvzbw');
  if (state.succeeded) {
    return <p>Thanks for contacting!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <Paper className="form-container">
        <TextField id="email" type="email" name="email" placeholder="Email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <TextField
          multiline
          id="message"
          name="message"
          placeholder="Message"
          rows={6}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button
          type="submit"
          disabled={state.submitting}
          sx={{ width: '75px' }}
        >
          Submit
        </Button>
      </Paper>
    </form>
  );
}

export default ContactForm;
