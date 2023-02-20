import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import ReactPaginate from 'react-paginate';
// import spinner from './../../../Assets/Images/Infinity-1s-200px.svg'
import CartBook from './CartBook';
const AllBooks = () => {

    const [books, setBooks] = useState([]);
    const [model, setModel] = useState([]);
    const [code, setCode] = useState("")
    const [year, setYear] = useState("")
    const [page, setPage] = useState(0)
    const [type, setType] = useState("");
    const [searchValue,setSearchValue]= useState('')
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    // useEffect(() => {
    //     fetch('http://localhost:5000/postBook')
    //         .then(res => res.json())
    //         .then(data => setBooks(data))
    // }, [])

    useEffect(() => {
        console.log(type, year, code)
        fetch(`http://localhost:5000/postBook?page=${page}&&size=${size}&&type=${type}&&year=${year}&&code=${code}`)
            .then(res => res.json())
            .then(data => {
                setBooks(data.allQuestions)
                setModel(data.allQuestions)
                // setSearchValue(data.allQuestions)
                // console.log(data)

                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [type, year, code, page]);
    console.log(books)

    const handlePageChange = (data) => {
        setPage(data.selected);
    }


    // search 
    const  handleSearch=(e)=>{
        e.preventDefault()
        const values = e.target.value;
        // console.log(values)
        setSearchValue(values)
    }

    const handleValue = (e) => {
      
        e.preventDefault()
        // const values = e.target.value;
        // console.log(values)
        // console.log(questions)
        const newValue = model?.filter(ques => ques?.code?.toLocaleLowerCase()?.includes(searchValue))
        
        // console.log(newValue)
        // newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
        // console.log(newValue)
        setModel(newValue)
        // console.log(newValue)
       
      
    }

    useEffect(()=>{
        fetch('http://localhost:5000/postBook')
        .then(res=>res.json())
        .then(data=>setModel(data.allQuestions))
    },[])



    const managePost = model?.filter(models => models?.status === 'approved' || models.role==='admin');
    console.log(books)
    console.log(managePost)



    return (
       <div style={{background:"#0E1621"}}>
        <Header></Header>
         <div className="container text-black mt-5 mb-5" >

            {/* search  */}
            <div className="row ">
                <div className="col-md-4">
                    <div className='mb-5'><h1 className="user-desire-question text-white">Find All Questions</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="search-box mb-8">
                        <form onSubmit={handleValue}>
                         
                            <input onBlur={handleSearch} type="text" name='search'
                            style={{fontWeight:"600"}}
                            placeholder='Example : abc123       course-code'/>
                           
                            <button type='submit'>Search</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question text-bold text-white fw-bold">Books <span style={{color:"#1289A7"}}>Collection</span></h1></div>
            {
                books.length === 0 ?
                    <div className=" justify-content-center w-100 d-flex">
                        {/* <img src={spinner} alt="" /> */}
                    </div>
                    :
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {managePost?.map((book) => (

                            <CartBook
                                key={book.id}
                                data={book}>

                            </CartBook>

                        ))}
                    </div>
            }

        </div>

        <div className="d-flex mt-5">
                    <div className='mx-auto'>

                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={1}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName='pagination'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-link'
                            nextClassName='page-link'
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            activeClassName='active'
                        />

                    </div>
                </div>
        <Footer></Footer>
       </div>
    );
};

export default AllBooks;