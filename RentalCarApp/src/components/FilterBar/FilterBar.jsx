import { Formik } from "formik";
import s from "./FilterBar.module.css";
import { Form } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../redux/cars/operations";
import { selectBrands } from "../../redux/cars/selectors";
import { nanoid } from "@reduxjs/toolkit";

const FilterBar = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  useEffect(() => {
    dispatch(getBrands);
  }, [dispatch]);

  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Field as="select" name="brands" id="brandsField">
            {brands?.map((brand) => {
              <option value="brand" id={nanoid()}>
                {brand}
              </option>;
              return;
            })}
          </Field>
          <Field type="text" name="username" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterBar;
