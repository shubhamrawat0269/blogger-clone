import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { LuMoveLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { useGlobalContext } from "../../../hooks/useGlobalContext";

function CreateBlog() {
  const { mode } = useGlobalContext();

  const [blogs, setBlogs] = useState("");
  const [thumbnail, setthumbnail] = useState();

  const [text, settext] = useState("");
  // console.log("Value: ");
  // console.log("text: ", text);

  // Create markup function
  // function createMarkup(c) {
  //   return { __html: c };
  // }
  return (
    <div className="container mx-auto max-w-5xl py-6">
      <div
        className="p-5"
        style={{
          background: mode === "dark" ? "#353b48" : "#FF5733",
        }}
      >
        {/* Top Item  */}
        <div className="mb-2 flex justify-between">
          <div className="flex gap-2 items-center">
            {/* Dashboard Link  */}
            <Link to={"/dashboard"}>
              <LuMoveLeft size={25} />
            </Link>

            {/* Text  */}
            <Typography
              variant="h4"
              style={{
                color: mode === "dark" ? "white" : "black",
              }}
            >
              Create blog
            </Typography>
          </div>
        </div>

        {/* main Content  */}
        <div className="mb-3">
          {/* Thumbnail  */}
          {thumbnail && (
            <img
              className=" w-full rounded-md mb-3"
              src={thumbnail ? URL.createObjectURL(thumbnail) : ""}
              alt="thumbnail"
            />
          )}

          {/* Text  */}
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-semibold"
            style={{ color: mode === "dark" ? "white" : "black" }}
          >
            Upload Thumbnail
          </Typography>

          {/* 1. Thumbnail Input  */}
          <input
            type="file"
            label="Upload thumbnail"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
            style={{
              background: mode === "dark" ? "#dcdde1" : "#e88c3c",
            }}
            onChange={(e) => setthumbnail(e.target.files[0])}
          />
        </div>

        {/* 2. Title Input */}
        <div className="mb-3">
          <input
            label="Enter your Title"
            className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none ${
                   mode === "dark" ? "placeholder-black" : "placeholder-black"
                 }`}
            placeholder="Enter Your Title"
            style={{
              background: mode === "dark" ? "#dcdde1" : "#e88c3c",
            }}
            name="title"
          />
        </div>

        {/* 3. Category Input  */}
        <div className="mb-3">
          <input
            label="Enter your Category"
            className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none ${
                   mode === "dark" ? "placeholder-black" : "placeholder-black"
                 }`}
            placeholder="Enter Your Category"
            style={{
              background: mode === "dark" ? "#dcdde1" : "#e88c3c",
            }}
            name="category"
          />
        </div>

        {/* 4. Editor  */}
        <Editor
          apiKey="9jo3lu73p1xbfqaw6jvgmsbrmy7qr907nqeafe1wbek6os9d"
          onEditorChange={(newValue, editor) => {
            setBlogs({ blogs, content: newValue });
            settext(editor.getContent({ format: "text" }));
          }}
          onInit={(evt, editor) => {
            settext(editor.getContent({ format: "text" }));
          }}
        />

        {/* 5. Submit Button  */}
        <Button
          className=" w-full mt-5"
          style={{
            background: mode === "dark" ? "rgb(226, 232, 240)" : "#e88c3c",
            color: mode === "dark" ? "rgb(30, 41, 59)" : "#fff",
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default CreateBlog;
