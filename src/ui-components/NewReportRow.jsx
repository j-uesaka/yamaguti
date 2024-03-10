/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NewReportRow(props) {
  const { report, overrides, ...rest } = props;
  return (
    <View
      width="555px"
      height="29px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NewReportRow")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="555px"
        height="19px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 9.5px - 5px)"
        left="calc(50% - 277.5px - 0px)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "\u884C")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="500"
          color="rgba(169,208,142,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="144px"
          height="19px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={report?.presenter_id}
          {...getOverrideProps(overrides, "\u63D0\u51FA\u8005")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="500"
          color="rgba(169,208,142,1)"
          lineHeight="18.15340805053711px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="310px"
          height="19px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={report?.report_title}
          {...getOverrideProps(overrides, "\u30BF\u30A4\u30C8\u30EB")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="500"
          color="rgba(169,208,142,1)"
          lineHeight="21.784090042114258px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="81px"
          height="19px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={report?.date}
          {...getOverrideProps(overrides, "\u5B9F\u65BD\u65E5")}
        ></Text>
      </Flex>
      <Icon
        width="555px"
        height="1px"
        viewBox={{ minX: 0, minY: 0, width: 555, height: 1 }}
        paths={[
          {
            d: "M555 1L0 1L0 0L555 0L555 1Z",
            fill: "rgba(169,208,142,1)",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="28px"
        left="0px"
        {...getOverrideProps(overrides, "\u6A2A\u7DDA (Stroke)")}
      ></Icon>
    </View>
  );
}
