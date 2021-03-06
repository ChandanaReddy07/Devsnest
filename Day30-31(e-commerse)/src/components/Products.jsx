import React from "react";
import "./prod.css";
import x from "./xx";
import y from "./yy";
import z from "./zz";

import { FaShoppingCart } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const sortby = [
  "Relevance",
  "Low To High",
  "Popularity",
  "High To Low",
  "Discount",
];
const Products = () => {
  const [prod, setProd] = useState([]);
  const [set, setSet] = useState(sortby[0]);
  // const [id, setId] = useState(1);
  const [newp, setNewp] = useState([]);

  const setCat1 = (i) => {
    if (i === 1) {
      setNewp(x);
      setProd(x);
    } else if (i === 2) {
      setProd(z);
      setNewp(z);
    } else if (i === 3) {
      setProd(y);
      setNewp(y);
    }
  };

  // const setCat1 = (i) => {
  //   if(i === 2){
  //     setNewp ( y.filter((p , index) => p.id === i));
  //     setProd(newp);
  //   }
  //   else if(i === 3){
  //     setNewp(y.filter((p , index) => p.id === i));
  //     setProd(newp);
  //   }
  // }

  function aec() {
    setProd([...prod].sort((a, b) => Number(a.Price) - Number(b.Price)));
    setSet(sortby[1]);
  }
  function pop() {
    setProd([...prod].sort((b, a) => Number(a.rating) - Number(b.rating)));
    setSet(sortby[2]);
  }
  function dec() {
    setProd([...prod].sort((b, a) => Number(a.Price) - Number(b.Price)));
    setSet(sortby[3]);
  }
  function dis() {
    setProd([...prod].sort((b, a) => Number(a.discount) - Number(b.discount)));
    setSet(sortby[4]);
  }
  const rel = () => {
    setProd(newp);
  };
  const price = (pri) => {
    if (pri === 1) {
      const newprod = newp.filter((p, index) => p.Price >= 0 && p.Price < 501);
      setProd(newprod);
    } else if (pri === 2) {
      const newprod = newp.filter(
        (p, index) => p.Price > 500 && p.Price < 1001
      );
      setProd(newprod);
    } else if (pri === 3) {
      const newprod = newp.filter(
        (p, index) => p.Price > 1000 && p.Price < 10001
      );
      setProd(newprod);
    } else if (pri === 4) {
      const newprod = newp.filter((p, index) => p.Price > 10000);
      setProd(newprod);
    }
  };

  const rate = (rat) => {
    if (rat === 1) {
      const newprod = newp.filter((p, index) => p.rating >= 1);
      setProd(newprod);
    } else if (rat === 2) {
      const newprod = newp.filter((p, index) => p.rating >= 2);
      setProd(newprod);
    } else if (rat === 3) {
      const newprod = newp.filter((p, index) => p.rating >= 3);
      setProd(newprod);
    } else if (rat === 4) {
      const newprod = newp.filter((p, index) => p.rating >= 4);
      setProd(newprod);
    }
  };

  const discnt = (dis) => {
    if (dis === 1) {
      const newprod = newp.filter((p, index) => p.discount >= 10);
      setProd(newprod);
    } else if (dis === 2) {
      const newprod = newp.filter((p, index) => p.discount >= 20);
      setProd(newprod);
    } else if (dis === 3) {
      const newprod = newp.filter((p, index) => p.discount >= 30);
      setProd(newprod);
    } else if (dis === 4) {
      const newprod = newp.filter((p, index) => p.discount >= 40);
      setProd(newprod);
    } else if (dis === 5) {
      const newprod = newp.filter((p, index) => p.discount >= 50);
      setProd(newprod);
    } else if (dis === 6) {
      const newprod = newp.filter((p, index) => p.discount >= 60);
      setProd(newprod);
    } else if (dis === 7) {
      const newprod = newp.filter((p, index) => p.discount >= 70);
      setProd(newprod);
    } else if (dis === 8) {
      const newprod = newp.filter((p, index) => p.discount >= 80);
      setProd(newprod);
    }
  };

  return (
    <div className="allproduct">
      <div className="allprod_nav">
        <p> category kids</p>
        <button onClick={() => setCat1(1)}>Kids</button>
        <button onClick={() => setCat1(2)}>Men</button>
        <button onClick={() => setCat1(3)}>Women</button>
        <button onClick={() => setCat1(4)}>Electronics</button>
        <button onClick={() => setCat1(5)}>Furnitures</button>
      </div>
      <div className="allprod_grid">
        <div className="allprod_slid">
          <p className="allprd_prange">Price Range</p>
          <div className="allprd_range">
            <button className="allprd_rbtn" onClick={() => price(1)}>
              Rs . 0 - 500
            </button>
            <button className="allprd_rbtn" onClick={() => price(2)}>
              Rs .501 - 1000
            </button>
            <button className="allprd_rbtn" onClick={() => price(3)}>
              Rs .1000 and 10000
            </button>
            <button className="allprd_rbtn" onClick={() => price(4)}>
              Rs .10000 and above
            </button>
          </div>

          <p className="allprd_prange">Rating</p>
          <div className="allprd_range">
            <button className="allprd_rbtn" onClick={() => rate(1)}>
              1 <AiFillStar /> and above{" "}
            </button>
            <button className="allprd_rbtn" onClick={() => rate(2)}>
              2 <AiFillStar />
              <AiFillStar /> and above
            </button>
            <button className="allprd_rbtn" onClick={() => rate(3)}>
              3 <AiFillStar /> <AiFillStar /> <AiFillStar /> and above
            </button>
            <button className="allprd_rbtn" onClick={() => rate(4)}>
              4 <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> and
              above
            </button>
          </div>

          <p className="allprd_prange">Discount Range</p>
          <div className="allprd_range">
            {[...Array(8)].map((_, index) => {
              return (
                <button
                  key={index}
                  className="allprd_rbtn"
                  onClick={() => discnt(index + 1)}
                >
                  {10 * (index + 1)}% and above
                </button>
              );
            })}
          </div>
        </div>

        <div className="container2">
          <div className="allprd_details">
            {newp.length > 0 ? (
              <h1>{newp[0].catergory}</h1>
            ) : (
              <h1>category</h1>
            )}

            <div className="allprod_dropdown">
              <div className="allprod_sort">
                Sort By: <p>{set}</p>
                <RiArrowDownSLine className="allprd_arr" />
              </div>
              <div className="allprod_dropdown-content">
                <p onClick={rel}>Relevance</p>
                <p onClick={aec}>Price: Low To High</p>
                <p onClick={dec}>Price: High To Low</p>
                <p onClick={pop}>Popularity</p>
                <p onClick={dis}>Discount</p>
              </div>
            </div>
          </div>
          <div className="container1">
            {prod.length > 0 ? (
              prod.map((el, index) => {
                return (
                  <div className="parent">
                  <div key={index} className="card1">
                    <div className="imgbx">
                      <img src={el.image.mainImage} alt="" />
                      <button className="allprd_btn">View Details</button>
                    </div>
                    <div className="content">
                      <p className="allprd_ttl"> {el.title}</p>
                      <p className="allprd_sttl">{el.subtitle}</p>
                      <div className="allprd_sb">
                        <span>Rs .{el.Price}</span>
                        <div className="lolo">
                          <button className=" allprd_add_btn">
                            <FaShoppingCart style={{ fontSize: "25px" }} />
                          </button>
                          <p className="allprd_add">Add to Cart</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                );
              })
            ) : (
              <div className="allprod_none"> No Products Found </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
