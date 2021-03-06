import { navigate } from "@reach/router";
import React from "react";

import {
  MeComponent,
  HelloWorldComponent,
  GetOnlyThreadsComponent
} from "../generated/graphql";
import { IPageProps } from "./types";
import Chat from "../components/chat-example/Chat";

const ChatPage: React.FC<IPageProps> = ({ path }: IPageProps) => {
  return (
    <HelloWorldComponent>
      {({ data: dataHello, error: errorHello, loading: loadingHello }) => {
        if (errorHello) {
          navigate("/login", {
            state: {
              authenticated: false,
              flashMessage: "You are not authenticated"
            }
          });
        }
        if (loadingHello) {
          return <div>loading...</div>;
        }
        if (!dataHello) {
          return <div>Something's wrong</div>;
        }
        return (
          <MeComponent>
            {({ data, loading, error }) => {
              if (loading) return <div>loading...</div>;
              if (error) return <div>error: {error}</div>;
              if (data && data.me) {
                return (
                  <GetOnlyThreadsComponent
                    variables={{
                      feedinput: { cursor: "2019-09-14T20:59:38.512Z", take: 8 }
                    }}
                  >
                    {({
                      data: dataGetOnlyThreads,
                      error: errorGetOnlyThreads,
                      loading: loadingGetOnlyThreads
                    }) => {
                      if (errorGetOnlyThreads)
                        return <div>Error{errorGetOnlyThreads}</div>;
                      if (loadingGetOnlyThreads) return <div>loading...</div>;
                      return (
                        <Chat />
                        // <GetOnlyThreads
                        //   dataGetOnlyThreads={dataGetOnlyThreads}
                        //   errorGetOnlyThreads={errorGetOnlyThreads}
                        //   loadingGetOnlyThreads={loadingGetOnlyThreads}
                        //   me={data.me}
                        // />
                      );
                    }}
                  </GetOnlyThreadsComponent>
                );
              }
            }}
          </MeComponent>
        );
      }}
    </HelloWorldComponent>
  );
};

export default ChatPage;
