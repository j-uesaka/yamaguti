/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils.js";
import { Text, View } from "@aws-amplify/ui-react";
export default function SampleButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="402px"
      height="97px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SampleButton")}
      {...rest}
    >
      <View
        width="402px"
        height="97px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(169,208,142,1)"
        {...getOverrideProps(overrides, "ver2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.15340805053711px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="402px"
          height="97px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="嘘だよ"
          {...getOverrideProps(overrides, "button12511")}
        ></Text>
      </View>
      <View
        width="402px"
        height="97px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(169,208,142,1)"
        {...getOverrideProps(overrides, "ver1")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.15340805053711px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="402px"
          height="97px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ボタン"
          {...getOverrideProps(overrides, "button1253")}
        ></Text>
      </View>
    </View>
  );
}
