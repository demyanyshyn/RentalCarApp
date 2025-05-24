import { Field, Form, Formik } from "formik";
import s from "./FilterBar.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../redux/cars/operations";
import { selectBrands } from "../../redux/cars/selectors";
import { nanoid } from "@reduxjs/toolkit";
import { getPriceArray } from "../../utils/getPriceArray";

const FilterBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(getBrands(controller.signal));

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  const brands = useSelector(selectBrands);
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Field as="select" name="brands" id="brandsField">
            {brands?.map((brand) => (
              <option value={brand} key={nanoid()}>
                {brand}
              </option>
            ))}
          </Field>
          <Field as="select" name="price" id="priceField">
            {getPriceArray(10, 300, 10)?.map((price) => (
              <option value={price} key={nanoid()}>
                {price}
              </option>
            ))}
          </Field>

          <Field type="text" name="minMileage" id="minMileageField" />
          <Field type="text" name="maxMileage" id="maxMileageField" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterBar;
