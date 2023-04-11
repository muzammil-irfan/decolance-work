import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Box } from '@chakra-ui/react';

const TextEditor = () => {
  

  return (
    
       <Box display={"flex"} className='text_editor' m={"0 auto"} width={{base:"90%",'lg':"100%"}}>

        <CKEditor
        
            editor={ ClassicEditor }
            style={{width:"300px"}}
            data=""
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
            
        />
       </Box>
 
);
}

export default TextEditor