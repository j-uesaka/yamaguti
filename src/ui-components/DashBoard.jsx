/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function DashBoard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      {...getOverrideProps(overrides, "DashBoard")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="400"
        color="rgba(169,208,142,1)"
        lineHeight="26.625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ダッシュボード"
        {...getOverrideProps(overrides, "DashBoardText")}
      ></Text>
    </Flex>
  );
}
