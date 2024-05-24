

$('#btnWritePost').click(()=>{
    // console.log(window.currentUser);
    const body = $('#postBody').val();
    const title = $('#postTitle').val();
    const id = currentUser.id;

    if(!body || !title){
        return;
    }

    $.post('http://localhost:3000/api/posts',{
        body:body,
        title:title,
        userId:id
    },(post)=>{
        console.log("Post Created");
    })

})