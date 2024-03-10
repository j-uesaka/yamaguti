/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function IngreAndTodo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="359px"
      height="140px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="5px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(151,249,255,0.4)"
      {...getOverrideProps(overrides, "IngreAndTodo")}
      {...rest}
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="13px"
        left="15px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="DynamoDBのBlog"
        {...getOverrideProps(overrides, "DynamoDB\u306EBlog")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(255,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="70px"
        left="15px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="MySQLのIngredient"
        {...getOverrideProps(overrides, "MySQL\u306EIngredient")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="204px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="20px"
        left="136px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        {...getOverrideProps(overrides, "name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.363636016845703px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="204px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="84px"
        left="137px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Ingredient"
        {...getOverrideProps(overrides, "Ingredient")}
      ></Text>
    </View>
  );
}
