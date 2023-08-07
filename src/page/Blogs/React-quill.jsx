import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// eslint-disable-next-line react/prop-types
function ReactQuillEditor({onChange}) {

    const modules = {
        toolbar: {
          container: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'], // Thêm button 'image' cho việc chèn ảnh
            ['clean'],
          ],
        },
      };
    
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'link', 'image', // Thêm định dạng 'image'
      ];
    
    return ( 
        <ReactQuill
        style={{height:'300px',margin:'20px 0px'}}
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={onChange}
      />
     );
}

export default ReactQuillEditor;