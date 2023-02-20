import React, { useEffect, useState } from 'react';
// import QuestionCart from './QuestionCart';
import ReactPaginate from 'react-paginate';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import useAuth from '../../hooks/useAuth';
import QuestionCart from './QuestionCart';
import './AllQuestion.css'
// import spinner from './../../../Assets/Images/Infinity-1s-200px.svg'
const AllQuestion = () => {

    const [questions, setQuestions] = useState([]);
    const [model, setModel] = useState([]);
    const [type, setType] = useState("")
    const [searchValue,setSearchValue]= useState('')
    const [exam,setExam]= useState('')
    const [searchYear,setSearchYear]= useState('')
    // const [searchValue, setSearchValue] = useState([]);
    const [code, setCode] = useState("")
    const [year, setYear] = useState("")
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    // console.log(questions)

    const handlePageChange = (data) => {
        setPage(data.selected);
    }

    const {admin}=useAuth()
   
    // checkbox er value true or false return kore

    // useEffect(() => {
    //     fetch('http://localhost:5000/allQuestions')
    //         .then(res => res.json())
    //         .then(data => setQuestions(data.allQuestion))
    // }, [])

    useEffect(() => {
        console.log(type, year, code)
        fetch(`http://localhost:5000/allQuestions?page=${page}&&size=${size}&&type=${type}&&year=${year}&&code=${code}&&exam=${exam}`)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.allQuestions)
                setModel(data.allQuestions)
                // setSearchValue(data.allQuestions)
                // console.log(data)

                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [exam,type, year, code, page]);


    useEffect(()=>{
        fetch('http://localhost:5000/allQuestions')
        .then(res=>res.json())
        .then(data=>setModel(data.allQuestions))
    },[])
      
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

    // const managePost = questions?.filter(models => models?.role === true);
    const managePost = model?.filter(models => models?.status === 'approved' || models.role==='admin');
    console.log(model)
    console.log(managePost)
    

    const  handleSearch=(e)=>{
        e.preventDefault()
        const values = e.target.value;
        // console.log(values)
        setSearchValue(values)
    }
    
 
    const handleSubmit=() =>{
        // handleValue()
       }

    return (
        
    <div>
        {/* <Header></Header> */}
          <div  style={{background:"#0E1621"}}>
            <Header></Header>
          <div className="container text-black mt-5 mb-5">
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
                            placeholder='Example : abc123-2020     courseCode-mid/final-2017-2022 ' />
                           
                            <button type='submit'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* {questions.length ? */}
            <div className="row g-4" >
                <div className="col-12 col-md-2">
                    <div className="question-sidebar">
                        <h5 className='mb-3 text-white'>Select Questions</h5>
                        <form
                            onChange={(e) => setExam(e.target.value)}
                        >

                             
                         {/* {
                          model.map((models)=>( */}
                            {/* <div> */}
                           <div className='brands mt-3'>
                            {/* <h5 style={{fontWeight:"700"}} className='text-white texts-design'>City</h5> */}
                           <div className="form-check align-items-center me-3">
                                <input className="form-check-input" type="checkbox" value="mid" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all text-white me-4" for="flexCheckDefault">
                                    MID
                                </label>
                            </div>
                            <div className="form-check align-items-center me-3">
                                <input className="form-check-input" type="checkbox" value="final" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-4 text-white" for="flexCheckDefault">
                                FINAL
                                </label>
                            </div>

                           </div>

                           </form>

                        {/* <div className='mt-3'>
                            <h5>Filter Year</h5>
                            <select onChange={(e) => setYear(e.target.value)} name="year" id="year">
                                <option value="">Select Year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                            </select>
                        </div> */}
                        {/* <div className='mt-3'>
                            <h5>Semester</h5>
                            <select onChange={(e) => setCode(e.target.value)} name="code" id="code">
                                <option value="cse">Select Year</option>
                                <option value="cse123">cse123</option>
                                <option value="bba102">bba102</option>
                                <option value="3">3rd</option>
                                <option value="4">4th</option>
                                <option value="5">5th</option>
                                <option value="6">2016</option>
                                <option value="7">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                            </select>
                        </div> */}

                    </div>
                </div>
                <div className="col-12 col-md-10">
                    {
                        questions.length === 0 ?

                            <div className=" justify-content-center w-100 d-flex">
                                {/* <img src={spinner} alt="" /> */}
                            </div> :
                            <div className="row">
                                {managePost?.map((question) => (
                                    <QuestionCart
                                        key={question.id}
                                        data={question}>
                                    </QuestionCart>
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


            </div >

            {/* : <div><h5>Loading...</h5></div>} */}



        </div >
        <Footer></Footer>
      </div>
    </div>
    );
};

export default AllQuestion;