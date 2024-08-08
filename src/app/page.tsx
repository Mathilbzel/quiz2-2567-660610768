"use client";

import Image from "next/image";
import styles from "./page.module.css";
import PostOwner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >

        <PostOwner postImagePath="/profileImages/Me.png" StuName="Buachompoo Rerksuitthirat" ID="660610768" post="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" likeNum={100} />

        {comments.map(comment => {
          return <Comment {...comment} key={comment.username} />
        })}
      </div>
    </div>
  );
}
