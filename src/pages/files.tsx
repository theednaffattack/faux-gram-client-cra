import FileList from "../components/file-list-profile-picture";
import { MeComponent } from "../generated/graphql";

import { Flex, Heading, Text } from "../components/styled-rebass";

const CarsPage = () => (
  <MeComponent>
    {({ data, loading, error }) => {
      if (!data || !data.me) {
        return null;
      }
      if (error) {
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>error!!!</Heading>
          <Text>{error.message}</Text>
        </Flex>;
      }
      if (loading) {
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>loading...</Heading>
        </Flex>;
      }

      return (
        <>
          <FileList me={data.me.id} />
        </>
      );
    }}
  </MeComponent>
);

export default CarsPage;
