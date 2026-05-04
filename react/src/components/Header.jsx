import animated from "../assets/Animated.jpg"

function Header(){
    return(
        
            <header className="head">

                <img src={animated} alt="An animated picture of mine" className="pic"/>
                <div className="head-info">
                    <h1>Musa Maphutha</h1>
                    <span>Frontend Developer</span>
                </div>

                <div className="links ">

                    <a href="#" className="link email">
                    <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' 
                    role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EMail%3C/title%3E%3Cdesc%3EA solid styled icon from Orion Icon Library.%3C/desc%3E%3Cpath 
                    data-name='layer1' fill='%23202020' d='M2 14.7v34.4l17.2-17.5L2 14.7zm42.8 16.9L62 49.1V14.7L44.8 31.6z'%3E%3C/path%3E%3Cpath data-name='layer2' fill='%23202020' 
                    d='M59.1 12H5l27 26.6L59.1 12z'%3E%3C/path%3E%3Cpath data-name='layer1' fill='%23202020' d='M32 44.2l-10-9.8L4.7 52h54.6L42 34.4l-10 9.8z'%3E%3C/path%3E%3C/svg%3E" 
                    alt="Mail" />
                    <span>Email</span>

                    </a>

                    <a href="#" className="link linkedin">
                        <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ELinkedin%3C/title%3E%3Cdesc%3EA line styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' 
                        fill='none' stroke='%23202020' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M3.078 22.331h12.188v36.844H3.078z' stroke-linejoin='round'%3E%3C/path%3E%3Cpath data-name='layer2' d='M46.719 21.112c-5.344 0-8.531 1.969-11.906 6.281v-5.062H22.625v36.844h12.281V39.206c0-4.219 2.156-8.344 7.031-8.344s7.781 4.125 7.781 
                        8.25v20.063H62V38.269c0-14.532-9.844-17.157-15.281-17.157z' fill='none' stroke='%23202020' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' stroke-linejoin='round'%3E%3C/path%3E%3Cpath data-name='layer1' d='M9.219 4.425C5.188 4.425 2 7.331 2 10.894s3.188 6.469 7.219 6.469 7.219-2.906 7.219-6.469-3.188-6.469-7.219-6.469z' 
                        fill='none' stroke='%23202020' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E" alt="Linkedin" />
                        <span>LinkedIn</span>
                    </a>
                    
                    
                </div>




            </header>
        
    
    )
}

export default Header