import React from "react";

import { GetListToCreateThreadComponent } from "../generated/graphql";
import { ChooseThreadUser } from "./choose-thread-user";
import { IAddressBookMutationProps } from "./types";

function AddressBookMutation({
  dataMessageThreads,
  handleAddInviteeToThread,
  selectedThreadIndex
}: IAddressBookMutationProps) {
  return (
    <>
      <GetListToCreateThreadComponent>
        {({
          data: dataCreateThread,
          loading: loadingCreateThread,
          error: errorCreateThread
        }) => {
          if (errorCreateThread)
            return <div>some error: {errorCreateThread}</div>;
          if (loadingCreateThread) {
            return <div>loading...</div>;
          }

          if (dataCreateThread) {
            return (
              <div>
                <ChooseThreadUser
                  handleAddInviteeToThread={handleAddInviteeToThread}
                  dataCreateThread={
                    dataCreateThread.getListToCreateThread &&
                    dataCreateThread.getListToCreateThread.thoseICanMessage
                  }
                  loadingCreateThread={loadingCreateThread}
                  errorCreateThread={errorCreateThread}
                  messages={
                    dataMessageThreads &&
                    selectedThreadIndex &&
                    dataMessageThreads.getMessageThreads &&
                    dataMessageThreads.getMessageThreads[selectedThreadIndex]
                      ? dataMessageThreads.getMessageThreads[
                          selectedThreadIndex
                        ].messages
                      : []
                  }
                />
              </div>
            );
          } else {
            return <div>some weirdness</div>;
          }
        }}
      </GetListToCreateThreadComponent>
    </>
  );
}

export default AddressBookMutation;
