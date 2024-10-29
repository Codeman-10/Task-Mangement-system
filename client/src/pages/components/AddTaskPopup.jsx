import React from "react";
import {
  FormInput,
  FormGroup,
  FormButton,
  Form,
  Button,
  Radio,
} from "semantic-ui-react";
import { Formik, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "../../components/CustomDatePicker";
import BasicModal from "../../components/BasicModal";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addTask } from "../../services/api";

const schema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  dueDate: Yup.date().required("Due Date is required"),
});

function AddTaskPopup({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const handleSubmit = (values, { setSubmitting }) => {
    values.status = "";
    dispatch(addTask(values));
    onclose();
    // onSave(values);
    setSubmitting(false);
  };

  const getDate = () =>
    `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`;

  return (
    <div>
      <BasicModal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmit}
          initialValues={{
            title: "",
            description: "",
            dueDate: null,
            priority: "",
          }}
        >
          {({ handleSubmit, values, setFieldValue }) => (
            <div className="form-wrapper">
              <div className="heading">
                <p>Add Task</p>
                <p>Today {getDate()}</p>
              </div>
              <Form className="ui form" onSubmit={handleSubmit}>
                <Form.Field>
                  <label>Title</label>
                  <Field name="title" placeholder="Title" as={FormInput} />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-danger mt-2"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <Field
                    name="description"
                    placeholder="Description"
                    as="textarea"
                    rows="3"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-danger mt-2"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Priority</label>
                  <div
                    role="group"
                    aria-labelledby="my-radio-group"
                    style={{ display: "flex", gap: "10px" }}
                  >
                    <Field name="priority">
                      {({ field }) => (
                        <>
                          <Radio
                            label="Low"
                            name="priority"
                            value="Low"
                            checked={field.value === "Low"}
                            onChange={() => setFieldValue("priority", "Low")}
                          />
                          <Radio
                            label="Medium"
                            name="priority"
                            value="Medium"
                            checked={field.value === "Medium"}
                            onChange={() => setFieldValue("priority", "Medium")}
                          />
                          <Radio
                            label="High"
                            name="priority"
                            value="High"
                            checked={field.value === "High"}
                            onChange={() => setFieldValue("priority", "High")}
                          />
                        </>
                      )}
                    </Field>
                  </div>
                </Form.Field>
                <Form.Field>
                  <label>Due Date</label>
                  <DatePicker
                    selected={values.dueDate}
                    onChange={(date) => setFieldValue("dueDate", date)}
                    customInput={<CustomDatePicker />}
                  />
                  <ErrorMessage
                    name="dueDate"
                    component="div"
                    className="text-danger mt-2"
                  />
                </Form.Field>
                <Button type="button" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" primary>
                  Save
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      </BasicModal>
    </div>
  );
}

export default AddTaskPopup;
