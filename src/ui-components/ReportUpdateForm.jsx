/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getReport } from "../graphql/queries";
import { updateReport } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ReportUpdateForm(props) {
  const {
    id: idProp,
    report: reportModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    date: "",
    type1: "",
    type2: "",
    report_title: "",
    text: "",
    submission_approver_id: [],
    submission_department_id: "",
    required_flag: "",
    presenter_id: "",
    status: "",
    attachment: [],
    created_user_id: "",
    updated_user_id: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [type1, setType1] = React.useState(initialValues.type1);
  const [type2, setType2] = React.useState(initialValues.type2);
  const [report_title, setReport_title] = React.useState(
    initialValues.report_title
  );
  const [text, setText] = React.useState(initialValues.text);
  const [submission_approver_id, setSubmission_approver_id] = React.useState(
    initialValues.submission_approver_id
  );
  const [submission_department_id, setSubmission_department_id] =
    React.useState(initialValues.submission_department_id);
  const [required_flag, setRequired_flag] = React.useState(
    initialValues.required_flag
  );
  const [presenter_id, setPresenter_id] = React.useState(
    initialValues.presenter_id
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [attachment, setAttachment] = React.useState(initialValues.attachment);
  const [created_user_id, setCreated_user_id] = React.useState(
    initialValues.created_user_id
  );
  const [updated_user_id, setUpdated_user_id] = React.useState(
    initialValues.updated_user_id
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = reportRecord
      ? { ...initialValues, ...reportRecord }
      : initialValues;
    setDate(cleanValues.date);
    setType1(cleanValues.type1);
    setType2(cleanValues.type2);
    setReport_title(cleanValues.report_title);
    setText(cleanValues.text);
    setSubmission_approver_id(cleanValues.submission_approver_id ?? []);
    setCurrentSubmission_approver_idValue("");
    setSubmission_department_id(cleanValues.submission_department_id);
    setRequired_flag(cleanValues.required_flag);
    setPresenter_id(cleanValues.presenter_id);
    setStatus(cleanValues.status);
    setAttachment(cleanValues.attachment ?? []);
    setCurrentAttachmentValue("");
    setCreated_user_id(cleanValues.created_user_id);
    setUpdated_user_id(cleanValues.updated_user_id);
    setErrors({});
  };
  const [reportRecord, setReportRecord] = React.useState(reportModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getReport.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getReport
        : reportModelProp;
      setReportRecord(record);
    };
    queryData();
  }, [idProp, reportModelProp]);
  React.useEffect(resetStateValues, [reportRecord]);
  const [
    currentSubmission_approver_idValue,
    setCurrentSubmission_approver_idValue,
  ] = React.useState("");
  const submission_approver_idRef = React.createRef();
  const [currentAttachmentValue, setCurrentAttachmentValue] =
    React.useState("");
  const attachmentRef = React.createRef();
  const validations = {
    date: [],
    type1: [{ type: "Required" }],
    type2: [],
    report_title: [],
    text: [],
    submission_approver_id: [],
    submission_department_id: [],
    required_flag: [{ type: "Required" }],
    presenter_id: [{ type: "Required" }],
    status: [{ type: "Required" }],
    attachment: [],
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
          date: date ?? null,
          type1,
          type2: type2 ?? null,
          report_title: report_title ?? null,
          text: text ?? null,
          submission_approver_id: submission_approver_id ?? null,
          submission_department_id: submission_department_id ?? null,
          required_flag,
          presenter_id,
          status,
          attachment: attachment ?? null,
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
            query: updateReport.replaceAll("__typename", ""),
            variables: {
              input: {
                id: reportRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReportUpdateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date: value,
              type1,
              type2,
              report_title,
              text,
              submission_approver_id,
              submission_department_id,
              required_flag,
              presenter_id,
              status,
              attachment,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Type1"
        isRequired={true}
        isReadOnly={false}
        value={type1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              type1: value,
              type2,
              report_title,
              text,
              submission_approver_id,
              submission_department_id,
              required_flag,
              presenter_id,
              status,
              attachment,
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
              date,
              type1,
              type2: value,
              report_title,
              text,
              submission_approver_id,
              submission_department_id,
              required_flag,
              presenter_id,
              status,
              attachment,
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
        label="Report title"
        isRequired={false}
        isReadOnly={false}
        value={report_title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              type1,
              type2,
              report_title: value,
              text,
              submission_approver_id,
              submission_department_id,
              required_flag,
              presenter_id,
              status,
              attachment,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.report_title ?? value;
          }
          if (errors.report_title?.hasError) {
            runValidationTasks("report_title", value);
          }
          setReport_title(value);
        }}
        onBlur={() => runValidationTasks("report_title", report_title)}
        errorMessage={errors.report_title?.errorMessage}
        hasError={errors.report_title?.hasError}
        {...getOverrideProps(overrides, "report_title")}
      ></TextField>
      <TextField
        label="Text"
        isRequired={false}
        isReadOnly={false}
        value={text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              type1,
              type2,
              report_title,
              text: value,
              submission_approver_id,
              submission_department_id,
              required_flag,
              presenter_id,
              status,
              attachment,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.text ?? value;
          }
          if (errors.text?.hasError) {
            runValidationTasks("text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("text", text)}
        errorMessage={errors.text?.errorMessage}
        hasError={errors.text?.hasError}
        {...getOverrideProps(overrides, "text")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              date,
              type1,
              type2,
              report_title,
              text,
              submission_approver_id: values,
              submission_department_id,
              required_flag,
              presenter_id,
              status,
              attachment,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            values = result?.submission_approver_id ?? values;
          }
          setSubmission_approver_id(values);
          setCurrentSubmission_approver_idValue("");
        }}
        currentFieldValue={currentSubmission_approver_idValue}
        label={"Submission approver id"}
        items={submission_approver_id}
        hasError={errors?.submission_approver_id?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "submission_approver_id",
            currentSubmission_approver_idValue
          )
        }
        errorMessage={errors?.submission_approver_id?.errorMessage}
        setFieldValue={setCurrentSubmission_approver_idValue}
        inputFieldRef={submission_approver_idRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Submission approver id"
          isRequired={false}
          isReadOnly={false}
          value={currentSubmission_approver_idValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.submission_approver_id?.hasError) {
              runValidationTasks("submission_approver_id", value);
            }
            setCurrentSubmission_approver_idValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "submission_approver_id",
              currentSubmission_approver_idValue
            )
          }
          errorMessage={errors.submission_approver_id?.errorMessage}
          hasError={errors.submission_approver_id?.hasError}
          ref={submission_approver_idRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "submission_approver_id")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Submission department id"
        isRequired={false}
        isReadOnly={false}
        value={submission_department_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              type1,
              type2,
              report_title,
              text,
              submission_approver_id,
              submission_department_id: value,
              required_flag,
              presenter_id,
              status,
              attachment,
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
        label="Required flag"
        isRequired={true}
        isReadOnly={false}
        value={required_flag}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              type1,
              type2,
              report_title,
              text,
              submission_approver_id,
              submission_department_id,
              required_flag: value,
              presenter_id,
              status,
              attachment,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.required_flag ?? value;
          }
          if (errors.required_flag?.hasError) {
            runValidationTasks("required_flag", value);
          }
          setRequired_flag(value);
        }}
        onBlur={() => runValidationTasks("required_flag", required_flag)}
        errorMessage={errors.required_flag?.errorMessage}
        hasError={errors.required_flag?.hasError}
        {...getOverrideProps(overrides, "required_flag")}
      ></TextField>
      <TextField
        label="Presenter id"
        isRequired={true}
        isReadOnly={false}
        value={presenter_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              type1,
              type2,
              report_title,
              text,
              submission_approver_id,
              submission_department_id,
              required_flag,
              presenter_id: value,
              status,
              attachment,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            value = result?.presenter_id ?? value;
          }
          if (errors.presenter_id?.hasError) {
            runValidationTasks("presenter_id", value);
          }
          setPresenter_id(value);
        }}
        onBlur={() => runValidationTasks("presenter_id", presenter_id)}
        errorMessage={errors.presenter_id?.errorMessage}
        hasError={errors.presenter_id?.hasError}
        {...getOverrideProps(overrides, "presenter_id")}
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
              date,
              type1,
              type2,
              report_title,
              text,
              submission_approver_id,
              submission_department_id,
              required_flag,
              presenter_id,
              status: value,
              attachment,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              date,
              type1,
              type2,
              report_title,
              text,
              submission_approver_id,
              submission_department_id,
              required_flag,
              presenter_id,
              status,
              attachment: values,
              created_user_id,
              updated_user_id,
            };
            const result = onChange(modelFields);
            values = result?.attachment ?? values;
          }
          setAttachment(values);
          setCurrentAttachmentValue("");
        }}
        currentFieldValue={currentAttachmentValue}
        label={"Attachment"}
        items={attachment}
        hasError={errors?.attachment?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("attachment", currentAttachmentValue)
        }
        errorMessage={errors?.attachment?.errorMessage}
        setFieldValue={setCurrentAttachmentValue}
        inputFieldRef={attachmentRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Attachment"
          isRequired={false}
          isReadOnly={false}
          value={currentAttachmentValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.attachment?.hasError) {
              runValidationTasks("attachment", value);
            }
            setCurrentAttachmentValue(value);
          }}
          onBlur={() =>
            runValidationTasks("attachment", currentAttachmentValue)
          }
          errorMessage={errors.attachment?.errorMessage}
          hasError={errors.attachment?.hasError}
          ref={attachmentRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "attachment")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Created user id"
        isRequired={true}
        isReadOnly={false}
        value={created_user_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              type1,
              type2,
              report_title,
              text,
              submission_approver_id,
              submission_department_id,
              required_flag,
              presenter_id,
              status,
              attachment,
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
              date,
              type1,
              type2,
              report_title,
              text,
              submission_approver_id,
              submission_department_id,
              required_flag,
              presenter_id,
              status,
              attachment,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || reportModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || reportModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
