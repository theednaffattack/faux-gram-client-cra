import React from "react";
import { Card, Flex, Heading, Text, Image } from "rebass";

// import Layout from "./../components/Layout";
import { GetAllMyImagesComponent } from "../generated/graphql";
import { IPageProps } from "./types";

export const SeeMyImages = (data: any) => (
  <Flex flexDirection="column">
    {data && data.data.GetAllMyImages
      ? data.data.GetAllMyImages.map((image: any, index: number) => (
          <Card width="450px" key={index}>
            <Image src={`http://192.168.1.10:4000/temp/${image.uri}`} />

            {image.uri}
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
