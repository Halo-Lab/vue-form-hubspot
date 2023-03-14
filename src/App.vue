<template>
  <main class="container">
    <Form :hubspotFormId="hubspotFormId" :hubspotPortalId="hubspotPortalId">
      <Input
        fieldClassName="myField"
        inputClassName="inputMy"
        errorClassName="error"
        labelClassName="myLabel"
        type="text"
        placeholder="Your First Name"
        name="firstname"
        :validator="[
          { name: 'required' },
          { name: 'letters' }
        ]"
        label="Your Name"
      />
      <Input
        fieldClassName="myField"
        inputClassName="inputMy"
        errorClassName="error"
        labelClassName="myLabel"
        type="text"
        placeholder="Your Last Name"
        name="lastname"
        :validator="[
          { name: 'required' },
          { name: 'letters' }
        ]"
        label="Your Name"
      />
      <Input
        placeholder="Email Address"
        type="email"
        name="email"
        :validator="[{ name: 'required' }, { name: 'email' }]"
        label="Email Address"
      />
      <TextArea
        label="Message"
        placeholder="Message"
        name="message"
        :validator="[{ name: 'required' }]"
      />
      <Select
        label="Your City"
        search
        name="city"
        :validator="[{ name: 'required' }]"
        :options="[
          { label: 'New York', value: 'New York' },
          { label: 'Paris', value: 'Paris' },
          { label: 'Kyiv', value: 'Kyiv' }
        ]"
      />
      <RadioGroup
        label="Your Gender"
        name="gender"
        :fields="[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female', checked: true }
        ]"
      />
      <CheckBoxGroup
      label="Your Skills"
      name="skills"
      :fields="[
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'React', label: 'React' },
        { value: 'Angular', label: 'Angular' },
        { value: 'Vue', label: 'Vue' }
        ]"
      />
      <Button label="Send form" type="submit" className="button-filledMy" />
    </Form>
  </main>
</template>

<script>
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  RadioGroup,
  CheckBoxGroup,
} from './components';

export default {
  components: {
    Form,
    Input,
    TextArea,
    Button,
    Select,
    RadioGroup,
    CheckBoxGroup,
  },
  data() {
    const HUBSPOT_PORTAL_ID = import.meta.env.VITE_API_HUBSPOT_PORTAL;
    const HUBSPOT_FORM_ID = import.meta.env.VITE_API_HUBSPOT_FORM_ID;

    return { hubspotFormId: HUBSPOT_FORM_ID, hubspotPortalId: HUBSPOT_PORTAL_ID };
  },
  methods: {
    submit(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  max-width: 95%;
  margin: 0 auto;
  padding: 10px 0;
}
</style>
