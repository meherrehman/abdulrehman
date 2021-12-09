import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import CommentIcon from '@mui/icons-material/Comment';
import Navbar from "./Navbar";

const Contact = () => {

    const submitbtn = () =>{
        alert("Response Submitted ... Thanks")
    }

    return(
        <>
            <Navbar />
            <div id="contact">
            <div className="container">
            <div className="row">
                <div className="col display-1 text-center my-3 contactContent">Contact Me!</div>
            </div>
            <div className="row mx-2">
            <div className="form-floating mb-3 p-1">
            <input type="text" className="form-control" id="nameInput" placeholder="Enter Your Name" />
            <label for="nameInput"><AccountCircleIcon /> Enter Your Name</label>
            </div>
            <div className="form-floating mb-3 p-1">
            <input type="email" className="form-control" id="emailInput" placeholder="Enter Your Email" />
            <label for="emailInput"><EmailIcon /> Enter Your E-mail Address</label>
            </div>
            <div className="form-floating p-1">
            <textarea className="form-control" placeholder="Leave a comment here" id="textareaInput" style={{height: "100px"}}></textarea>
            <label for="textareaInput"><CommentIcon /> Comments</label>
            <button className="btn btn-primary my-2" onClick={submitbtn}>Submit</button>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}


export default Contact;