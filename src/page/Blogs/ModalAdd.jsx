import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import ReactQuillEditor from "./React-quill";
import { useState } from "react";
import FileBase64 from "react-file-base64"
import { useDispatch } from "react-redux";
import { createPostRequest } from "../../Redux/Actions";

// eslint-disable-next-line react/prop-types
function ModalAdd({open,handleClose}) {
    const [data,setData] = useState({
        title:'',
        content:'',
        attachment:'',
        author:''
    })
    const dispatch = useDispatch();

    const handleAddBlog = () => {
      // Dispatch the createPostRequest action to add a new blog
      dispatch(createPostRequest(data));
      handleClose(); // Close the modal after adding the blog
    }
    console.log(data);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
      };
      const handleEditorChange = (content) => {
        // Xử lý khi nội dung trình soạn thảo thay đổi và lưu nội dung vào state
        setData((prevData) => ({
          ...prevData,
          content: content, // Lưu nội dung trình soạn thảo vào trường content
        }));
      };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thêm blogs mới!
          </Typography>
          <TextField 
            value={data.title}
            required
            label='Tên bài viết'
            onChange={(e)=>{setData({...data, title: e.target.value})}}
          />
         <ReactQuillEditor onChange={handleEditorChange}/>
         <TextField 
            style={{margin:'40px 0px 20px'}}
            value={data.author}
            required
            label='Tên tác giả'
            onChange={(e)=>{setData({...data, author: e.target.value})}}
          />
          <FileBase64 
            accept="image/*"
            multiple={false}
            type="file"
            value={data.attachment}
            onDone={({base64})=> setData({...data,attachment: base64})}
          />
          <Button variant="contained" style={{margin:'20px 0px'}} onClick={handleAddBlog}>Thêm blogs!</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalAdd;
