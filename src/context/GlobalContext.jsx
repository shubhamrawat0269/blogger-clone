import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { fireDb } from "../firebase/FirebaseConfig";

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
  };
  return (
    <GlobalContext.Provider value={contexts}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
