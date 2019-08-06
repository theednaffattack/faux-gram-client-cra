import React from "react";
import { Card, Flex, Heading, Image, Text } from "../components/styled-rebass";

// import Layout from "./../components/Layout";
import { GetAllMyImagesComponent } from "../generated/graphql";
import { IPageProps } from "./types";

export const SeeMyImages = (data: any) => (
  <Flex flexDirection="column">
    {data && data.data.GetAllMyImages
      ? data.data.GetAllMyImages.map((image: any, index: number) => (
          <Card
            key={index}
            borderRadius="15px"
            boxShadow="0 0 16px rgba(0, 0, 0, .25)"
            width={[1, "350px", "350px"]}
            // border="lime"
            style={{ overflow: "hidden" }}
          >
            <Image src={`${image.uri}`} />
          </Card>
        ))
      : ""}
    {data && data.data.GetAllMyImages.length < 1 ? (
      <Heading>You don't have any images yet</Heading>
    ) : (
      ""
    )}
  </Flex>
);

const Profile: React.FC<IPageProps> = ({ path }: IPageProps) => (
  <GetAllMyImagesComponent>
    {({ data, loading, error }) => {
      if (!data || !data.GetAllMyImages) {
        return null;
      }
      if (error) {
        return (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading>error!!!</Heading>
            <Text>{error.message}</Text>
          </Flex>
        );
      }
      if (loading) {
        return (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading>loading...</Heading>
          </Flex>
        );
      }

      return data && data.GetAllMyImages ? <SeeMyImages data={data} /> : null;
    }}
  </GetAllMyImagesComponent>
);

export default Profile;
