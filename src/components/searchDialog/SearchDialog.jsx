import { Fragment, useState } from "react";
import { Dialog, DialogBody, Input } from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export default function SearchDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const { mode } = useGlobalContext();
  return (
    <Fragment>
      {/* Search Icon  */}
      <div onClick={handleOpen} className="cursor-pointer">
        <AiOutlineSearch size={20} color="white" />
      </div>
      {/* Dialog  */}
      <Dialog
        className=" relative right-[1em] w-[25em]  md:right-0 md:w-0 lg:right-0 lg:w-0"
        open={open}
        handler={handleOpen}
        style={{
          background: mode === "light" ? "#FF5733" : "#2f3542",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        {/* Dialog Body  */}
        <DialogBody>
          <div className="flex w-full justify-center">
            {/* Input  */}
            <Input
              color="white"
              type="search"
              label="Type here..."
              className=" bg-orange-200"
              name="searchkey"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
          </div>

          {/* Blog Card  */}
          <div className="flex justify-center flex-wrap  sm:mx-auto sm:mb-2 -mx-2  mt-4 mb-2 ">
            <div className="p-2 sm:w-1/4 w-full ">
              <div className=" container mx-auto px-4 bg-gray-200 p-2 rounded-lg ">
                {/* Blog Thumbnail  */}
                <img
                  className="w-20 mb-2 rounded-lg"
                  src={"images/blog-card-1.jpg"}
                  alt="blog-card-1"
                />

                {/* Blog Date  */}
                <p className="w-40 text-sm">{"date"}</p>

                {/* Blog Title  */}
                <h1>{"title"}</h1>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
