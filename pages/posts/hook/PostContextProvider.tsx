import React, { useState, createContext } from "react";

interface IDPost {
  id: number
}

const initialCtxValue: IDPost = {
  id: 0
}

export const PostContext = createContext({ postId: initialCtxValue, setPostId: (postId: IDPost) => { } })

const PostProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [postId, setPostId] = useState<IDPost>(initialCtxValue)

  return (
    <PostContext.Provider value={{ postId, setPostId }}>{children}</PostContext.Provider>
  )
};

export default PostProvider;
