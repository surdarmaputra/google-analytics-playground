import Field from 'components/atoms/Field';
import Input from 'components/atoms/Input';

export default function PersonalInfoForm() {
  return (
    <>
      <Field title="Card number">
        <Input name="card_number" placeholder="Card number" type="text" />
      </Field>
      <Field title="Expiry">
        <Input name="expiry" placeholder="Expiry" type="text" />
      </Field>
      <Field title="CVV">
        <Input name="cvv" placeholder="CVV" type="text" />
      </Field>
    </>
  );
}
