import React, { useEffect, useState } from 'react'
import Item from './Books/Item';
import './Pages.css'
import Loader from './Loader/Loader';
// import InfiniteScroll from "react-infinite-scroll-component";
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput,setSearchInput]=useState('');
  // const [searchResult,setSearchresult]=useState([]);
  const [query,setQuery]=useState('business');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);


  // Function datafetch for fetching Data from api
  const dataFetch = async () => {
    const Baseurl = 'https://openlibrary.org/search.json';
    try {
      // setPage(page+1);
      // setPage((prevPage)=>{prevPage+1})
      const response = await fetch(`${Baseurl}?q=${query}&page=${page}&limit=50&fields=key,title,author_name,edition_count,cover_i,first_publish_year,want_to_read_count`);
      // const response = await fetch(`${Baseurl}?q=business&page=${page}&limit=10`);
      const dataRecieved = await response.json();
      setBooks(dataRecieved.docs);
       console.log(dataRecieved.docs[1]);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      if (error.message) {
        setError(true);
        console.log('fetch aborted');
        return;
      }
    } finally {
      console.log('In finally clause')
      // setIsLoading(false);
    }
  }

  //setting search results to state
  const handleSearch=(event)=>{
    event.preventDefault();
    setSearchInput(event.target.value);
  }
  const handleSubmit=()=>{
    setQuery(searchInput.replace(/\s/g, '%'));
     console.log(query);
  }
  const handlePrev =()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling behavior
    });
    setPage((prevpage)=>prevpage-1);
    setIsLoading(true)
    console.log(page);
  }
  const handleNext= ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling behavior
    });
    setPage((prevpage)=>prevpage+1);
    setIsLoading(true)
    console.log(page);
  }
  useEffect(() => {
    dataFetch();
  }, [page,query])
  return (
    <div className='parentdiv'>
      <section id="product1" className="section-p1">
        <h2>Featured Books</h2>
        <h3><em>"</em> A book is a magic carpet that takes you on an adventure around the world without ever leaving home <em>"</em></h3>
        <div className="searchbox">
          <input onChange={handleSearch} type="text"  placeholder='Enter any book or author' />
            <button disabled={searchInput.length<=0} onClick={handleSubmit} className='searchbtn'>Search</button>
          {/* <i onClick={handleSubmit}><img src="https://i.imgur.com/V4e83VH.png" alt="search" /></i> */}
        </div>
          <div className="pro-container">
           
            {isLoading === false && books ? books.map((item) => {
              return (
                <Item key={item.key} title={item.title} coverId={item.cover_i} author={item.author_name} publishYear={item.first_publish_year}
                  id={item.key.replace('/works/', "")} editionNo={item.edition_count} price={item.want_to_read_count} />
              )
            }): <div >
              <Loader/>
              {/* <h3>Loading...</h3> */}
            </div>
            
            }
            
          </div>
          <div className="btnSection">
            <button disabled={page===1} onClick={handlePrev} className="btn">Previous</button>
            <button disabled={books.length < 50} onClick={handleNext} className="btn">Next</button>
          </div>
      </section>

    </div>
  )
}

export default Home

