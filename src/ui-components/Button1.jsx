/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { useState } from "react";
import { Text, View } from "@aws-amplify/ui-react";
export default function Button1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "\u5909\u66F4\u524D": {
          top: "20px",
          left: "81px",
          children: "\u5909\u66F4\u3057\u307E\u3057\u305F",
        },
        Button1: { backgroundColor: "rgba(169,208,142,1)" },
      },
      variantValues: {},
    },
    { overrides: { "\u5909\u66F4\u524D": {}, Button1: {} }, variantValues: {} },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const [Children, setChildren] = useState("\u5909\u66F4\u524D");
  const buttonOneOnClick = () => {
    setChildren('"\u5909\u308F\u3063\u305F\u3088"');
  };
  return (
    <View
      width="412px"
      height="111px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(151,249,255,0.4)"
      onClick={() => {
        buttonOneOnClick();
      }}
      {...getOverrideProps(overrides, "Button1")}
      {...rest}
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
        width="250px"
        height="54px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="25px"
        left="84px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={Children}
        {...getOverrideProps(overrides, "\u5909\u66F4\u524D")}
      ></Text>
    </View>
  );
}
