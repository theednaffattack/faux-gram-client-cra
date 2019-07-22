import React from "react";

import { Heading } from "./styled-rebass";
import { MyFollowingPostsComponent } from "../generated/graphql";
import { FOLLOWING_POSTS } from "../graphql/user/subscriptions/FollowingPosts";
import FollowingPosts from "./following-posts";
import { updateFunctionMyFollows } from "./update-my-follows";

const Feed = ({ me }: any) => (
  <>
    <Heading as="h1">My Feed</Heading>
    <Heading as="h3">{me.name}</Heading>

    <MyFollowingPostsComponent>
      {({ data, error, loading, subscribeToMore }) => (
        <FollowingPosts
          data={data ? data : null}
          loading={loading}
          error={error}
          subscribeToMore={subscribeToMore}
          subscribeToNewPosts={() =>
            subscribeToMore({
              document: FOLLOWING_POSTS,
              variables: {
                data: {
                  sentBy: "init",
                  message: "init"
                }
              },
              updateQuery: (prev, { subscriptionData }) =>
                updateFunctionMyFollows(prev, { subscriptionData })
            })
          }
        />
      )}
    </MyFollowingPostsComponent>
  </>
);

export default Feed;
