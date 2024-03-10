/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createReportMaster } from "../graphql/mutations";
const client = generateClient();
export default function ReportMasterCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type1: "",
    type2: "",
    template_report_title: "",
    template_text: "",
    submission_department_id: "",
    status: "",
    created_user_id: "",
    updated_user_id: "",
  };
  const [type1, setType1] = React.useState(initialValues.type1);
  const [type2, setType2] = React.useState(initialValues.type2);
  const [template_report_title, setTemplate_report_title] = React.useState(
    initialValues.template_report_title
  );
  const [template_text, setTemplate_text] = React.useState(
    initialValues.template_text
  );
  const [submission_department_id, setSubmission_department_id] =
    React.useState(initialValues.submission_department_id);
  const [status, setStatus] = React.useState(initialValues.status);
  const [created_user_id, setCreated_user_id] = React.useState(
    initialValues.created_user_id
  );
  const [updated_user_id, setUpdated_user_id] = React.useState(
    initialValues.updated_user_id
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType1(initialValues.type1);
    setType2(initialValues.type2);
    setTemplate_report_title(initialValues.template_report_title);
    setTemplate_text(initialValues.template_text);
    setSubmission_department_id(initialValues.submission_department_id);
    setStatus(initialValues.status);
    setCreated_user_id(initialValues.created_user_id);
    setUpdated_user_id(initialValues.updated_user_id);
    setErrors({});
  };
  const validations = {
    type1: [{ type: "Required" }],
    type2: [],
    template_report_title: [],
    template_text: [],
    submission_department_id: [],
    status: [{ type: "Required" }],
    created_user_id: [{ type: "Required" }],
    updated_user_id: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          type1,
          type2,
          template_report_title,
          template_text,
          submission_department_id,
          status,
          created_user_id,
          updated_user_id,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createReportMaster.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReportMasterCreateForm")}
      {...rest}
    >
      <TextField
        label="Type1"
        isRequired={true}
        isReadOnly={false}
        value={type1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type1: value,
              type2,
              template_report_title,
              template_text,
              submission_department_id,
              status,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.type1 ?? value;
          }
          if (errors.type1?.hasError) {
            runValidationTasks("type1", value);
          }
          setType1(value);
        }}
        onBlur={() => runValidationTasks("type1", type1)}
        errorMessage={errors.type1?.errorMessage}
        hasError={errors.type1?.hasError}
        {...getOverrideProps(overrides, "type1")}
      ></TextField>
      <TextField
        label="Type2"
        isRequired={false}
        isReadOnly={false}
        value={type2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type1,
              type2: value,
              template_report_title,
              template_text,
              submission_department_id,
              status,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.type2 ?? value;
          }
          if (errors.type2?.hasError) {
            runValidationTasks("type2", value);
          }
          setType2(value);
        }}
        onBlur={() => runValidationTasks("type2", type2)}
        errorMessage={errors.type2?.errorMessage}
        hasError={errors.type2?.hasError}
        {...getOverrideProps(overrides, "type2")}
      ></TextField>
      <TextField
        label="Template report title"
        isRequired={false}
        isReadOnly={false}
        value={template_report_title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type1,
              type2,
              template_report_title: value,
              template_text,
              submission_department_id,
              status,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.template_report_title ?? value;
          }
          if (errors.template_report_title?.hasError) {
            runValidationTasks("template_report_title", value);
          }
          setTemplate_report_title(value);
        }}
        onBlur={() =>
          runValidationTasks("template_report_title", template_report_title)
        }
        errorMessage={errors.template_report_title?.errorMessage}
        hasError={errors.template_report_title?.hasError}
        {...getOverrideProps(overrides, "template_report_title")}
      ></TextField>
      <TextField
        label="Template text"
        isRequired={false}
        isReadOnly={false}
        value={template_text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type1,
              type2,
              template_report_title,
              template_text: value,
              submission_department_id,
              status,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.template_text ?? value;
          }
          if (errors.template_text?.hasError) {
            runValidationTasks("template_text", value);
          }
          setTemplate_text(value);
        }}
        onBlur={() => runValidationTasks("template_text", template_text)}
        errorMessage={errors.template_text?.errorMessage}
        hasError={errors.template_text?.hasError}
        {...getOverrideProps(overrides, "template_text")}
      ></TextField>
      <TextField
        label="Submission department id"
        isRequired={false}
        isReadOnly={false}
        value={submission_department_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type1,
              type2,
              template_report_title,
              template_text,
              submission_department_id: value,
              status,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.submission_department_id ?? value;
          }
          if (errors.submission_department_id?.hasError) {
            runValidationTasks("submission_department_id", value);
          }
          setSubmission_department_id(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "submission_department_id",
            submission_department_id
          )
        }
        errorMessage={errors.submission_department_id?.errorMessage}
        hasError={errors.submission_department_id?.hasError}
        {...getOverrideProps(overrides, "submission_department_id")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={true}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type1,
              type2,
              template_report_title,
              template_text,
              submission_department_id,
              status: value,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Created user id"
        isRequired={true}
        isReadOnly={false}
        value={created_user_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type1,
              type2,
              template_report_title,
              template_text,
              submission_department_id,
              status,
              created_user_id: value,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.created_user_id ?? value;
          }
          if (errors.created_user_id?.hasError) {
            runValidationTasks("created_user_id", value);
          }
          setCreated_user_id(value);
        }}
        onBlur={() => runValidationTasks("created_user_id", created_user_id)}
        errorMessage={errors.created_user_id?.errorMessage}
        hasError={errors.created_user_id?.hasError}
        {...getOverrideProps(overrides, "created_user_id")}
      ></TextField>
      <TextField
        label="Updated user id"
        isRequired={true}
        isReadOnly={false}
        value={updated_user_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type1,
              type2,
              template_report_title,
              template_text,
              submission_department_id,
              status,
              created_user_id,
              updated_user_id: value,
            };
            const result = onChange(modelFields);
            value = result?.updated_user_id ?? value;
          }
          if (errors.updated_user_id?.hasError) {
            runValidationTasks("updated_user_id", value);
          }
          setUpdated_user_id(value);
        }}
        onBlur={() => runValidationTasks("updated_user_id", updated_user_id)}
        errorMessage={errors.updated_user_id?.errorMessage}
        hasError={errors.updated_user_id?.hasError}
        {...getOverrideProps(overrides, "updated_user_id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
