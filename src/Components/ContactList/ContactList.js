import React, { useState, useEffect } from "react";
import ContactListDetails from "./ContactListDetails/ContactListDetails";
import "./ContactList.css";
import axios from "axios";
import Skeleton from "../../Reusable/Skeleton/Skeleton";
import InfiniteScroll from "react-infinite-scroll-component";

const ContactList = () => {
  const [allContactListData, setAllContactListData] = useState([]);
  const [totalCount, settotalCount] = useState(0);
  const [hasMore, sethasMore] = useState(true);
  const [sliceCount, setsliceCount] = useState(10);

  useEffect(() => {
    getContactList();
  }, []);

  const getContactList = () => {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((res) => {
        if (res.status === 200) {
          const { results } = res.data;
          setAllContactListData(results);
          settotalCount(results.length);
        } else {
          alert("something went wrong");
        }
      })
      .catch((err) => {
        alert("something went wrong");
      });
  };

  const fetchMoreData = () => {
    if (sliceCount >= totalCount) {
      sethasMore(false);
      return;
    }

    setTimeout(() => {
      setsliceCount((prev) => prev + 10);
    }, 1000);
  };

  return (
    <div className="container">
      <h2 className="contact-header">Contacts List</h2>
      <InfiniteScroll
        dataLength={allContactListData.slice(0, sliceCount).length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="contact_list">
            {[...Array(10)].map((n) => (
              <Skeleton />
            ))}
          </div>
        }
        endMessage={
          <h4 className="scroll-end-text">
            <b>Yay! You have seen it all</b>
          </h4>
        }
      >
        <div className="contact_list">
          {allContactListData.slice(0, sliceCount).map((val, index) => (
            <ContactListDetails
              key={index}
              name={`${val?.name?.first} ${val?.name?.last}`}
              email={val?.email}
              phone={val?.phone}
              profileImg={val?.picture?.medium}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ContactList;
