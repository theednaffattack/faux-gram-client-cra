import React from "react";

import { MeComponent, HelloWorldComponent } from "../generated/graphql";
// import ViewThreads from "../components/view-threads";
import { IPageProps } from "./types";

const Messages: React.FC<IPageProps> = ({ path }: IPageProps) => {
  return (
    <HelloWorldComponent>
      {helloData => (
        <MeComponent>
          {(data: any) => {
            if (!data && !data.data.me) {
              return <div>loading....</div>;
            } else {
              return <div>{JSON.stringify(data.data, null, 2)}</div>; // <ViewThreads me={data.data.me.id} data={data} />;
            }
          }}
        </MeComponent>
      )}
    </HelloWorldComponent>
  );
};

export default Messages;
