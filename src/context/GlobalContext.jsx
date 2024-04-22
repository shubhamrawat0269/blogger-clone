import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { fireDb } from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [searchkey, setSearchkey] = useState("");
  const [loading, setloading] = useState(false);
  const [getAllBlog, setGetAllBlog] = useState([]);

  function getAllBlogs() {
    setloading(true);
    try {
      const q = query(collection(fireDb, "blogPost"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let blogArray = [];
        QuerySnapshot.forEach((doc) => {
          blogArray.push({ ...doc.data(), id: doc.id });
        });

        setGetAllBlog(blogArray);
        // console.log(productsArray)
        setloading(false);
      });

      return () => data;
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  // Blog Delete Function
  const deleteBlogs = async (id) => {
    try {
      await deleteDoc(doc(fireDb, "blogPost", id));
      getAllBlogs();
      toast.success("Blogs deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const contexts = {
    mode,
    toggleMode,
    searchkey,
    setSearchkey,
    loading,
    setloading,
    getAllBlog,
    deleteBlogs,
  };
  return (
    <GlobalContext.Provider value={contexts}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
