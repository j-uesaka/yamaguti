/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function NewReportRowCP(props) {
  const { report, test, overrides, ...rest } = props;
  return (
    <View
      width="383px"
      height="16px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="0px SOLID rgba(169,208,142,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NewReportRowCP")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="500"
        color="rgba(169,208,142,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="96px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={report?.presenter_id}
        {...getOverrideProps(overrides, "Presenter")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(169,208,142,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="194px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        left="96px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={report?.report_title}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(169,208,142,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="93px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        left="290px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="実施日"
        {...getOverrideProps(overrides, "Date")}
      ></Text>
      <Icon
        width="383px"
        height="1px"
        viewBox={{ minX: 0, minY: 0, width: 383, height: 1 }}
        paths={[
          {
            d: "M383 1L0 1L0 0L383 0L383 1Z",
            fill: "rgba(169,208,142,1)",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="15px"
        left="0px"
        {...getOverrideProps(overrides, "RowLine (Stroke)")}
      ></Icon>
    </View>
  );
}
