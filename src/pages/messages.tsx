import { navigate } from "@reach/router";
import React from "react";

import {
  MeComponent,
  HelloWorldComponent,
  GetOnlyThreadsComponent
} from "../generated/graphql";
import { IPageProps } from "./types";
import GetOnlyThreads from "../components/get-only-threads";

const Messages: React.FC<IPageProps> = ({
  showMessagingAddressBook,
  handleCreateNewMessageThread,
  handleCancelNewMessageThread,
  handleLoadNewThreadCreated,
  path
}: IPageProps) => {
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
          return <div>loading HELLO WORLD ...</div>;
        }
        if (!dataHello) {
          return <div>Something's wrong</div>;
        }
        return (
          <MeComponent>
            {({ data, loading, error }) => {
              if (loading) return <div>loading MEEEEEEEEEEEE...</div>;
              if (error) return <div>error: {error}</div>;
              if (data && data.me) {
                return (
                  <GetOnlyThreadsComponent
                    notifyOnNetworkStatusChange={true}
                    variables={{
                      feedinput: {
                        // cursor: "2019-09-17T20:59:38.512Z",
                        take: 6
                      }
                    }}
                  >
                    {({
                      data: dataGetOnlyThreads,
                      error: errorGetOnlyThreads,
                      loading: loadingGetOnlyThreads,
                      fetchMore: fetchMoreGetOnlyThreads
                    }) => {
                      // if (errorGetOnlyThreads)
                      //   return <div>Error{errorGetOnlyThreads}</div>;
                      // if (loadingGetOnlyThreads)
                      //   return <div>loading threads...</div>;

                      return (
                        <GetOnlyThreads
                          handleLoadNewThreadCreated={
                            handleLoadNewThreadCreated
                          }
                          dataGetOnlyThreads={dataGetOnlyThreads}
                          errorGetOnlyThreads={errorGetOnlyThreads}
                          loadingGetOnlyThreads={loadingGetOnlyThreads}
                          fetchMoreGetOnlyThreads={fetchMoreGetOnlyThreads}
                          handleCancelNewMessageThread={
                            handleCancelNewMessageThread
                          }
                          handleCreateNewMessageThread={
                            handleCreateNewMessageThread
                          }
                          showMessagingAddressBook={
                            showMessagingAddressBook !== undefined
                              ? showMessagingAddressBook
                              : false
                          }
                          me={data.me}
                        />
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

export default Messages;
