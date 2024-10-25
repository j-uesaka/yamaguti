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
import { createMailResultDetail } from "../graphql/mutations";
const client = generateClient();
export default function MailResultDetailCreateForm(props) {
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
    from: "",
    company: "",
    to: "",
    head: "",
    body: "",
    name: "",
    result: "",
    groupId: "",
  };
  const [from, setFrom] = React.useState(initialValues.from);
  const [company, setCompany] = React.useState(initialValues.company);
  const [to, setTo] = React.useState(initialValues.to);
  const [head, setHead] = React.useState(initialValues.head);
  const [body, setBody] = React.useState(initialValues.body);
  const [name, setName] = React.useState(initialValues.name);
  const [result, setResult] = React.useState(initialValues.result);
  const [groupId, setGroupId] = React.useState(initialValues.groupId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFrom(initialValues.from);
    setCompany(initialValues.company);
    setTo(initialValues.to);
    setHead(initialValues.head);
    setBody(initialValues.body);
    setName(initialValues.name);
    setResult(initialValues.result);
    setGroupId(initialValues.groupId);
    setErrors({});
  };
  const validations = {
    from: [{ type: "Required" }],
    company: [{ type: "Required" }],
    to: [{ type: "Required" }],
    head: [],
    body: [],
    name: [],
    result: [{ type: "Required" }],
    groupId: [{ type: "Required" }],
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
          from,
          company,
          to,
          head,
          body,
          name,
          result,
          groupId,
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
            query: createMailResultDetail.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "MailResultDetailCreateForm")}
      {...rest}
    >
      <TextField
        label="From"
        isRequired={true}
        isReadOnly={false}
        value={from}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from: value,
              company,
              to,
              head,
              body,
              name,
              result,
              groupId,
            };
            const result = onChange(modelFields);
            value = result?.from ?? value;
          }
          if (errors.from?.hasError) {
            runValidationTasks("from", value);
          }
          setFrom(value);
        }}
        onBlur={() => runValidationTasks("from", from)}
        errorMessage={errors.from?.errorMessage}
        hasError={errors.from?.hasError}
        {...getOverrideProps(overrides, "from")}
      ></TextField>
      <TextField
        label="Company"
        isRequired={true}
        isReadOnly={false}
        value={company}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              company: value,
              to,
              head,
              body,
              name,
              result,
              groupId,
            };
            const result = onChange(modelFields);
            value = result?.company ?? value;
          }
          if (errors.company?.hasError) {
            runValidationTasks("company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("company", company)}
        errorMessage={errors.company?.errorMessage}
        hasError={errors.company?.hasError}
        {...getOverrideProps(overrides, "company")}
      ></TextField>
      <TextField
        label="To"
        isRequired={true}
        isReadOnly={false}
        value={to}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              company,
              to: value,
              head,
              body,
              name,
              result,
              groupId,
            };
            const result = onChange(modelFields);
            value = result?.to ?? value;
          }
          if (errors.to?.hasError) {
            runValidationTasks("to", value);
          }
          setTo(value);
        }}
        onBlur={() => runValidationTasks("to", to)}
        errorMessage={errors.to?.errorMessage}
        hasError={errors.to?.hasError}
        {...getOverrideProps(overrides, "to")}
      ></TextField>
      <TextField
        label="Head"
        isRequired={false}
        isReadOnly={false}
        value={head}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              company,
              to,
              head: value,
              body,
              name,
              result,
              groupId,
            };
            const result = onChange(modelFields);
            value = result?.head ?? value;
          }
          if (errors.head?.hasError) {
            runValidationTasks("head", value);
          }
          setHead(value);
        }}
        onBlur={() => runValidationTasks("head", head)}
        errorMessage={errors.head?.errorMessage}
        hasError={errors.head?.hasError}
        {...getOverrideProps(overrides, "head")}
      ></TextField>
      <TextField
        label="Body"
        isRequired={false}
        isReadOnly={false}
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              company,
              to,
              head,
              body: value,
              name,
              result,
              groupId,
            };
            const result = onChange(modelFields);
            value = result?.body ?? value;
          }
          if (errors.body?.hasError) {
            runValidationTasks("body", value);
          }
          setBody(value);
        }}
        onBlur={() => runValidationTasks("body", body)}
        errorMessage={errors.body?.errorMessage}
        hasError={errors.body?.hasError}
        {...getOverrideProps(overrides, "body")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              company,
              to,
              head,
              body,
              name: value,
              result,
              groupId,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Result"
        isRequired={true}
        isReadOnly={false}
        value={result}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              company,
              to,
              head,
              body,
              name,
              result: value,
              groupId,
            };
            const result = onChange(modelFields);
            value = result?.result ?? value;
          }
          if (errors.result?.hasError) {
            runValidationTasks("result", value);
          }
          setResult(value);
        }}
        onBlur={() => runValidationTasks("result", result)}
        errorMessage={errors.result?.errorMessage}
        hasError={errors.result?.hasError}
        {...getOverrideProps(overrides, "result")}
      ></TextField>
      <TextField
        label="Group id"
        isRequired={true}
        isReadOnly={false}
        value={groupId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              company,
              to,
              head,
              body,
              name,
              result,
              groupId: value,
            };
            const result = onChange(modelFields);
            value = result?.groupId ?? value;
          }
          if (errors.groupId?.hasError) {
            runValidationTasks("groupId", value);
          }
          setGroupId(value);
        }}
        onBlur={() => runValidationTasks("groupId", groupId)}
        errorMessage={errors.groupId?.errorMessage}
        hasError={errors.groupId?.hasError}
        {...getOverrideProps(overrides, "groupId")}
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
