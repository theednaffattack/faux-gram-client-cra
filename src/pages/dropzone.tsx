import { Flex, Heading, Text } from "rebass";

// import Layout from "../components/layout";
import { MeComponent, SignS3Component } from "../generated/graphql";
import React from "react";
import DropZone from "../components/dropzone";
import { IPageProps } from "./types";

// import AudioRecorder from "react-audio-recorder";
// import dynamic from "next/dynamic";
// import { isBrowser } from "../lib/isBrowser";

// const AudioRecorder = dynamic(() => import("react-audio-recorder") as any, {
//   ssr: false
// });

const DropPage: React.FC<IPageProps> = ({ path }: IPageProps) => (
  <MeComponent>
    {({ data: dataMe, loading: loadingMe, error: errorMe }) => {
      if (!dataMe || !dataMe.me) {
        return null;
      }
      if (errorMe) {
        return (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading>error!!!</Heading>
            <Text>{errorMe.message}</Text>
          </Flex>
        );
      }
      if (loadingMe) {
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

      return (
        <Flex>
          <SignS3Component>
            {(
              signS3,
              { data: dataSignS3, error: errorSignS3, loading: loadingSignS3 }
            ) => {
              return (
                <DropZone
                  disabled={false}
                  signS3={signS3}
                  data={dataSignS3}
                  error={errorSignS3}
                  loading={loadingSignS3}
                  mutation={signS3}
                  onFilesAdded={console.log}
                  me={dataMe.me}
                />
              );
            }}
          </SignS3Component>
        </Flex>
      );
    }}
  </MeComponent>
);

export default DropPage;
