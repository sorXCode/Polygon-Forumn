//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Comments {
  // Exposed data structure
  struct Comment {
    uint32 id;
    address creator_address;
    uint256 created_at;
    string topic;
    string message;
  }

  mapping(string => Comment[]) commentsByTopic;
  mapping(string => uint32) lastIndexes;
       
  // Notify users that a comment was added 
  event CommentAdded(Comment comment);

  // Fetch a list of comments for a topic 
  function getComments(string calldata topic) public view returns(Comment[] memory) {
    return commentsByTopic[topic];
  }

  // Persist a new comment
  function addComment(string calldata topic, string calldata message) public {
    Comment memory comment = Comment({
      id: lastIndexes[topic],
      creator_address: msg.sender,
      created_at: block.timestamp,
      topic: topic,
      message: message
    });

    commentsByTopic[topic].push(comment);
    lastIndexes[topic]++;

    emit CommentAdded(comment);

  }
  
}