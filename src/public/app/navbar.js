let navlinks = $(".navbar-nav .nav-link")


navlinks.click((e)=>{
    const component = $(e.target).attr('data-component');
 $('#content').load(`./components/${component}.html`);
})