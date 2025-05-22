import { Formik } from "formik";
import s from "./FilterBar.module.css";
import { Form } from "react-router-dom";

const FilterBar = () => {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Field as="select" name="level" id={levelFieldId}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <Field type="text" name="username" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterBar;
