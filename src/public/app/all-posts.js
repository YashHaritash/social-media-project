function loadPosts() {
    $.get('http://localhost:3000/api/posts', (posts) => {
        for (let i = 0; i < posts.length; i++) {
            let p = posts[i];
            $('#posts-container').append(`
                <div class="col-4">
                    <div class="card m-2">
                        <div class="card-body">
                            <h5 class="card-title">${p.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                            <p class="card-text">${p.body.substr(0, 200)} ...</p>
                            <a href="#" class="card-link read-more" data-id="${i}">Read More</a>
                        </div>
                    </div>
                </div>
            `);
        }

        $('.read-more').on('click', function(event) {
            event.preventDefault();
            let postId = $(event.target).data('id');
            let post = posts[postId];
            $('#content').html(`
                <div class="text-center">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">${post.title}</h4>
                            <br>
                            <h6 class="card-title">By : ${post.user.username}</h6>
                            <br>
                            <p class="card-text">${post.body}</p>
                            <a href="#" class="btn btn-primary" id="toggle-comments">Comments</a>
                        </div>
                    </div>
                </div>
                <div id="comments" style="display:none;" class="row">
                   
                </div>
            `);

            $.get(`http://localhost:3000/api/comments/post/${post.id}`,(comments)=>{
                for(let c of comments){
                    $('#comments').append(`
                    <div class="col-4">
                        <div class="card text-dark bg-light m-3">
                            <div class="card-header">${c.user.username}</div>
                            <div class="card-body">
                            <h5 class="card-title">${c.title}</h5>
                            <p class="card-text">${c.body}</p>
                            </div>
                        </div>
                    </div>
                    
                    `)
                }
            })

            // Attach click event listener to the "Comments" button
            $('#toggle-comments').on('click', function(event) {
                event.preventDefault();
                $('#comments').toggle();
            });
        });
    });
}
