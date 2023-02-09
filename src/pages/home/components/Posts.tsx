import { FC, useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../hooks/redux";
import { fetchPosts } from "../../../store/actionCreators/posts";

interface PostsProps {}

const Posts: FC<PostsProps> = () => {
  const dispatch = useTypedDispatch();

  const { posts, isLoading, error } = useTypedSelector((store) => store.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {isLoading && "Загрузка..."}
      {error && error}
      {posts.map((post, index) => (
        <div key={post.id} className="flex flex-col mb-10">
          <span className="text-green-800 font-bold">{index + 1 + ") " + post.title}</span>
          <span className="text-red-800">{post.body}</span>
        </div>
      ))}
    </div>
  );
};

export default Posts;
