/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Button3(props) {
  const { pr, overrides, ...rest } = props;
  const [OneDisplay, setOneDisplay] = useState("block");
  const [TwoDisplay, setTwoDisplay] = useState("block");
  const twoOnMouseLeave = () => {
    setOneDisplay("block");
  };
  const twoOnClick = () => {
    setTwoDisplay("none");
  };
  const oneOnMouseEnter = () => {
    setOneDisplay("none");
  };
  return (
    <View
      width="284px"
      height="57px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Button3")}
      {...rest}
    >
      <View
        width="284px"
        height="57px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(151,249,255,1)"
        {...getOverrideProps(overrides, "\u72B6\u614B3")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="14.522727012634277px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="284px"
          height="57px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="これは状態3です&#xA;"
          {...getOverrideProps(
            overrides,
            "\u3053\u308C\u306F\u72B6\u614B3\u3067\u3059"
          )}
        ></Text>
      </View>
      <View
        width="284px"
        height="57px"
        display={TwoDisplay}
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,0,0,1)"
        onMouseLeave={() => {
          twoOnMouseLeave();
        }}
        onClick={() => {
          twoOnClick();
        }}
        {...getOverrideProps(overrides, "\u72B6\u614B2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="14.522727012634277px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="284px"
          height="57px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="これは状態2です&#xA;"
          {...getOverrideProps(
            overrides,
            "\u3053\u308C\u306F\u72B6\u614B2\u3067\u3059"
          )}
        ></Text>
      </View>
      <View
        width="284px"
        height="57px"
        display={OneDisplay}
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(169,208,142,1)"
        onMouseEnter={() => {
          oneOnMouseEnter();
        }}
        {...getOverrideProps(overrides, "\u72B6\u614B1")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="14.522727012634277px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="284px"
          height="57px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          {...getOverrideProps(
            overrides,
            "\u3053\u308C\u306F\u72B6\u614B1\u3067\u3059"
          )}
        ></Text>
      </View>
    </View>
  );
}
