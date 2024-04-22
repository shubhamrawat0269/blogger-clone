import { Fragment, useState } from "react";
import { Dialog, DialogBody, Input } from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useNavigate } from "react-router-dom";

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(!open);

  const { mode, searchkey, setSearchkey, getAllBlog } = useGlobalContext();

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
              value={searchkey}
              onChange={(e) => setSearchkey(e.target.value)}
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
            {getAllBlog
              .filter((obj) =>
                obj.blogs.title.toLowerCase().includes(searchkey)
              )
              .map((item, index) => {
                return (
                  <div key={index} className="p-2 sm:w-1/4 w-full ">
                    <div
                      onClick={() => navigate(`/bloginfo/${item.id}`)}
                      className=" container cursor-pointer mx-auto px-4 bg-gray-200 p-2 rounded-lg "
                    >
                      {/* Blog Thumbnail  */}
                      <img
                        className="w-20 mb-2 rounded-lg"
                        src={item.thumbnail}
                        alt=""
                      />
                      {/* Blog Date  */}
                      <p className="w-40 text-sm">{item.date}</p>
                      {/* Blog Title  */}
                      <h1>{item.blogs.title}</h1>
                    </div>
                  </div>
                );
              })}
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
