// src/context/FirebaseContext.js

import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

import { app } from "@/lib/firebase/config";

const FirebaseContext = createContext();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore(app);

  useEffect(() => {
    const blogsRef = collection(db, "blogPosts");
    const projectsRef = collection(db, "projects");

    const unsubscribeBlogs = onSnapshot(blogsRef, (querySnapshot) => {
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBlogs(blogsData);
    });

    const unsubscribeProjects = onSnapshot(projectsRef, (querySnapshot) => {
      const projectsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjects(projectsData);
    });

    setLoading(false);

    // Clean up the subscriptions on unmount
    return () => {
      unsubscribeBlogs();
      unsubscribeProjects();
    };
  }, [db]);

  return (
    <FirebaseContext.Provider value={{ blogs, projects, loading }}>
      {children}
    </FirebaseContext.Provider>
  );
};
