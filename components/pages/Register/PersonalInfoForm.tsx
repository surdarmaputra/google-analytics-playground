import Field from 'components/atoms/Field';
import Input from 'components/atoms/Input';
import TextArea from 'components/atoms/TextArea';

export default function PersonalInfoForm() {
  return (
    <>
      <Field title="Full name">
        <Input name="name" placeholder="Your name" type="text" />
      </Field>
      <Field title="E-mail">
        <Input name="email" placeholder="email@domain.com" type="email" />
      </Field>
      <Field title="Phone number">
        <Input name="phone" placeholder="+1xxxxxx" type="phone" />
      </Field>
      <Field title="Address">
        <TextArea name="address" placeholder="Your address" />
      </Field>
    </>
  );
}
