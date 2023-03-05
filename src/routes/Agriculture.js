// const Agriculture = () => {
//   return <h2>Function 1 content</h2>;
// };

// export default Agriculture;
import Axios from "axios";
import FileDownload from "js-file-download";

function Agriculture() {

  const download=(e)=>{
    e.preventDefault()
    Axios({
      url:"http://localhost:4000",
      method:"GET",
      responseType:"blob"
    }).then((res)=>{
      console.log(res);
      FileDownload(res.data,"download1.jpg")
    })
  }
  return (
    <div>
      <button onClick={(e) => download(e)}>Download</button>
    </div>
    
  );
}

export default Agriculture;
