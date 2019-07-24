import React from "react";

import { MeComponent, HelloWorldComponent } from "../generated/graphql";
import ViewThreads from "../components/view-threads";
import { IPageProps } from "./types";

// function StrData(args: any) {
//   return <pre>{JSON.stringify(args, null, 2)}</pre>;
// }

const Messages: React.FC<IPageProps> = ({ path }: IPageProps) => {
  return (
    <HelloWorldComponent>
      {helloData => (
        <MeComponent>
          {({ data, loading, error }) => {
            if (loading) return <div>loading...</div>;
            if (error) return <div>error: {error}</div>;
            if (data && data.me) {
              return <ViewThreads me={data.me.id} data={data} />; // <StrData args={data} />; //
            }
          }}
        </MeComponent>
      )}
    </HelloWorldComponent>
  );
};

export default Messages;
