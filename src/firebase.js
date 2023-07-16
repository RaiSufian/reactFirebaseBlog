
import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, addDoc, collection, getDocs, query, limit, orderBy, where, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBmOe_dTVXNWl1ESLPAl9x-lBkiDVOODcA",
  authDomain: "enterblog-13d6b.firebaseapp.com",
  projectId: "enterblog-13d6b",
  storageBucket: "enterblog-13d6b.appspot.com",
  messagingSenderId: "1060390544016",
  appId: "1:1060390544016:web:536886fbb27cb4aae16e15",
  measurementId: "G-EP0SNBEF8R"
};


const FirebaseContext = createContext(null);
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseStore = getFirestore(firebaseApp);
const firebasestorage = getStorage(firebaseApp);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (prop) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user)
      }
      else {
        setUser(null)
      }
    })
  }, [])
  // console.log("current user value is ====================>", user);

  // creat new account
  const signUpwithEmail = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  }

  // sign In
  const signWithEmail = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  }

  // Sign out 
  const UserSignOut = () => {
    signOut(firebaseAuth).then(() => { }).catch((error) => { })
  }


  // Add new blog in react JS
  const addBlog = async (blog, date, img) => {
    const timestamp = Date.now();

    const { title, keys, dis, author, views, fa, cat } = blog;
    const imgRef = ref(firebasestorage, `blogs/images/${new Date()}-${img.name}`)
    const imgAddress = await uploadBytes(imgRef, img);
    const imageURL = await getDownloadURL(ref(firebasestorage, imgAddress.ref.fullPath))

    return await addDoc(collection(firebaseStore, "blogs"), {
      title,
      keys,
      dis,
      author,
      date: date,
      views,
      fa,
      cat,
      img: imageURL,
      id: timestamp
    })
  }

  // Get Hero Data 
  const getHeroData = async () => {
    const blogsRef = collection(firebaseStore, "blogs");
    const heroquery = query(blogsRef, orderBy("id", "desc"), limit(3));
    return await getDocs(heroquery);
  }
  // Get Featured List 
  const getFeaturedData = async () => {
    const blogsRef = collection(firebaseStore, "blogs");
    const feaQuery = query(blogsRef, where("fa", "==", "1"), limit(5));
    return await getDocs(feaQuery);
  }
  // Get data about Category with limit
  const getCatData = async (name) => {
    const blogsRef = collection(firebaseStore, "blogs");
    const catQuery = query(blogsRef, where("cat", "==", name), limit(8));
    return await getDocs(catQuery);
  }

  //  Get data aout Cat without limit 
  const getCatData2 = async (name) => {
    const blogsRef = collection(firebaseStore, "blogs");
    const catQuery = query(blogsRef, where("cat", "==", name));
    return await getDocs(catQuery);
  }

  // Get blog details
  const getBlogData = async (id) => {
    const docRef = doc(firebaseStore, "blogs", id);
    const result = await getDoc(docRef);
    return result;
  }

  // Update views of blogs
  const updateBlogsViews = (id, views) => {
    const docRef = doc(firebaseStore, "blogs", id);
    updateDoc(docRef, {
      views: ++views
    })
  }

  // Get Auther blogs 
  const getAuthordata = async (name) => {

    const docRef = collection(firebaseStore, "blogs");
    const blogQuery = query(docRef, where("author", "==", name), limit(6));
    return await getDocs(blogQuery);
  }


  // get papular blogs 
  const getPapulorBlogs = async () => {
    const docRef = collection(firebaseStore, "blogs");
    const blogQuery = query(docRef, orderBy("views", "desc"), limit(5))
    return await getDocs(blogQuery);
  }
  const userLogin = user ? true : false;

  return (
    <FirebaseContext.Provider value={{ signUpwithEmail, signWithEmail, userLogin, UserSignOut, addBlog, getHeroData, getFeaturedData, getCatData, getBlogData, updateBlogsViews, getAuthordata, getPapulorBlogs, getCatData2 }}>
      {prop.children}
    </FirebaseContext.Provider>
  )
}


