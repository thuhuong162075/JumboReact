import React, {useEffect, useState} from "react";
import Avatar from '@material-ui/core/Avatar';
import CommentBox from "./CommentBox";
import MediaList from "./MediaList";
import DisplayDate from "../DisplayDate/index";
import Card from '@material-ui/core/Card';
import {Input} from "reactstrap";


const PostItem = (props) => {

  const [message, setMessage] = useState("");

  const [post, setPost] = useState({
    id: 0,
    text: '',
    user: {},
    date: '',
    mediaList: [],
    viewCount: 0,
    likeCount: 0,
    isLike: false,
    commentList: []
  });

  useEffect(() => {
    setPost(props.postData);
  }, [props.postData]);

  const _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const commentData = {
        user: props.user,
        comment: message,
        date: new Date().toString(),
        likeCount: 0,
        isLike: true,
        commentList: []
      };

      let commentArray = post.commentList;
      commentArray.push(commentData);
      setPost({
          ...post,
          commentList: commentArray
        },
      );
      setMessage('');

    }
  };


  const updateCommentValue = (evt) => {
    setMessage(evt.target.value);
  };

  const handleLikeToggle = () => {
    setPost({
      ...post,
      isLike: !post.isLike,
      likeCount: (post.isLike === true ? post.likeCount - 1 : post.likeCount + 1)
    });
  };

  const {user, date, mediaList, viewCount, likeCount, isLike, commentList, text} = post;
  return (
    <Card className="jr-card">
      <div className="jr-wall-content">
        <div className="media jr-wall-user-info flex-nowrap align-items-center">
          <Avatar className="mr-3 mb-2 size-50" src={user.image}/>
          <div className="media-body">
            <h5 className="jr-wall-user-title">{user.name}</h5>
            <DisplayDate date={date}/>
          </div>
        </div>
        <p>{text}</p>
        <div className="jr-wall-medialist">
          {mediaList.length > 0 ? <MediaList mediaList={mediaList}/> : null}
        </div>
        <div className="d-flex flex-row mb-2 mb-xl-3">
          <p className="jr-fs-sm pointer mr-3 text-grey">
            <i className="zmdi zmdi-eye jr-fs-lg mr-2 d-inline-flex vertical-align-middle"/>
            <span
              className="d-inline-flex align-middle">{viewCount > 0 ? viewCount + ' Views' : 'Views'}</span>
          </p>
          <p className="jr-fs-sm pointer mr-3 text-grey" onClick={handleLikeToggle}>
            {isLike === true ?
              <i className="zmdi zmdi-favorite jr-fs-lg mr-2 d-inline-flex align-middle"
                 style={{color: 'blue'}}/> :
              <i className="zmdi zmdi-favorite-outline jr-fs-lg mr-2 d-inline-flex align-middle"/>}
            <span
              className="d-inline-flex vertical-align-middle">{likeCount > 0 ? likeCount + ' Likes' : 'Likes'}</span>

          </p>
          <p className="jr-fs-sm pointer mr-3 text-grey">
            <i className="zmdi zmdi-comment-more jr-fs-lg mr-2 d-inline-flex align-middle"/>
            <span
              className="d-inline-flex align-middle">{commentList.length > 0 ? commentList.length + ' Comments' : 'Comments'}</span>
          </p>
        </div>

        <div className="jr-wall-comment-box">
          {commentList.map((commentData, index) => <CommentBox key={index} index={index} commentData={commentData}/>)}
        </div>
        <div className="jr-wall-comment-box">
          <div className="media mb-2">
            <Avatar className="mr-3 size-36" src={user.image}/>
            <div className="media-body">
              <Input
                type="textarea"
                id="required" className="border-0"
                onChange={(event) => updateCommentValue(event)}
                onKeyPress={(event) => _handleKeyPress(event)}
                value={message}
                placeholder="Type Comments"
              />
            </div>
          </div>
        </div>

      </div>
    </Card>
  )
}

export default PostItem;
