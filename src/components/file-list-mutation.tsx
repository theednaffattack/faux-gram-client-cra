import React from "react";
import { CreatePostComponent } from "../generated/graphql";
import FileListBase from "./file-list-create-post";
import DropZoneContainer from "./dropzone-container";
import { SignS3Component } from "../generated/graphql";

interface IFileListMutation {
  me: string;
}

const CreatePostMutation = ({ me }: IFileListMutation) => {
  return (
    <SignS3Component>
      {(
        signS3,
        { data: dataSignS3, error: errorSignS3, loading: loadingSignS3 }
      ) => {
        return (
          <CreatePostComponent>
            {(
              createPost,
              {
                data: dataCreatePost,
                error: errorCreatePost,
                loading: loadingCreatePost
              }
            ) => (
              <DropZoneContainer
                me={me}
                mutate={createPost}
                mutateSignS3={signS3}
                dataCreatePost={dataCreatePost}
                errorCreatePost={errorCreatePost}
                loadingCreatePost={loadingCreatePost}
              />
            )}
          </CreatePostComponent>
        );
      }}
    </SignS3Component>
  );
};

export default CreatePostMutation;

{
  /* <CreatePostComponent>
      {createPost => <FileListBase me={me} mutate={createPost} />}
    </CreatePostComponent> */
}
